var express = require('express');
var router = express.Router();
const postController = require('../../components_Khoi/post/PostController');

const { initializeApp } = require('firebase/app');
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require('firebase/storage');
const multer = require('multer');

const firebaseConfig = {
  apiKey: "AIzaSyCgvEd6dtFmk2_M5jZNa0gdL5CIC0dolms",
  authDomain: "project01-429a7.firebaseapp.com",
  projectId: "project01-429a7",
  storageBucket: "project01-429a7.appspot.com",
  messagingSenderId: "988879330430",
  appId: "1:988879330430:web:075690b8029e80faa38c2f",
  measurementId: "G-L6Y03YG5DK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

const upload = multer({ storage: multer.memoryStorage() });
//add new post
router.post('/add', async function (req, res, next) {
  try {
    const { useridparam, content, image } = req.body;
    result = await postController.addNewPost(useridparam, content, image);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})
//delete post
router.get('/delete/:postid', async function (req, res, next) {
  try {
    const { postid } = req.params;
    result = await postController.deletePost(postid);
    return res.status(200).json({ result })
  } catch (error) {
    return res.status(400).json({})
  }
});


//get all post
router.get('/allpost', async function (req, res, next) {
  try {
    const post = await postController.getAllPost();
    return res.status(200).json({ post })
  } catch (error) {
    return res.status(400).json({})
  }
});

//get my post
router.get('/mypost/:userid', async function (req, res, next) {
  try {
    const { userid } = req.params;
    const post = await postController.getMyPost(userid);
    return res.status(200).json({ post })
  } catch (error) {
    return res.status(400).json({})
  }
});


//add image
router.post('/image', [upload.single('image')], async (req, res, next) => {
  try {
    let { file } = req;
    if (file) {
      const dateTime = giveCurrentDateTime();

      const storageRef = ref(storage, `instagram/${req.file.originalname + "_" + dateTime}`);

      const metadata = {
        contentType: req.file.mimetype,
      };


      const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);


      const downloadURL = await getDownloadURL(snapshot.ref);

      console.log('File successfully uploaded.');

      return res.json({ imageURL: downloadURL });
    } else {
      return res.json({ imageURL: '' });
    }
  } catch (error) {
    console.log('Add image:', error);
    next(error);
  }
});

//like post
router.post('/like', async function (req, res, next) {
  try {
    const { userid, postid } = req.body;
    result = await postController.likePost(userid, postid);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})
router.post('/unlike', async function (req, res, next) {
  try {
    const { userid, postid } = req.body;
    result = await postController.unlikePost(userid, postid);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})

router.post('/comment', async function (req, res, next) {
  try {
    const { postid, userid, content } = req.body;
    result = await postController.addCommentToPost(postid, userid, content);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})


router.get('/comment/:postid', async function (req, res, next) {
  try {
    const { postid } = req.params;
    result = await postController.getCommentsOfPost(postid);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})

router.post('/save', async function (req, res, next) {
  try {
    const { postid, userid } = req.body;
    result = await postController.savePost(postid, userid);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})

router.post('/unsave', async function (req, res, next) {
  try {
    const { postid, userid } = req.body;
    result = await postController.unsavePost(postid, userid);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})


router.get('/savedpost/:userid', async function (req, res, next) {
  try {
    const { userid } = req.params;
    result = await postController.getSavedPosts(userid);
    return res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})

router.post('/update', async function (req, res, next) {
  try {
    const { _id,content, image } = req.body;
    postUpdate = await postController.updatePost(_id,content,image);
    if(postUpdate){
      return res.status(200).json({ result:true,postUpdate });
    }
  } catch (error) {
    return res.status(400).json({ result: false });
  }
})





const giveCurrentDateTime = () => {
  const today = new Date();
  const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + ' ' + time;
  return dateTime;
}


module.exports = router;