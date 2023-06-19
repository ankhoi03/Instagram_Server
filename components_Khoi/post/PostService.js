const postModel = require('./PostModel');
const userModel = require('../../components_Trieu/user/UserModel');
const mongoose = require('mongoose');
//get all post
// const getAllPost = async () => {
//   try {
//     return await postModel.find();
//   } catch (error) {
//     console.log('>>>>>>>>Get all post ERROR: ', error)
//   }
//   return [];
// }

const getAllPost = async () => {
  try {
    const posts = await postModel.find()
      .populate('userid', 'username image');
    return posts;
  } catch (error) {
    console.log('Error getting posts:', error);
    return [];
  }
};

const getMyPost = async (userid) => {
  try {
    return await postModel.find({ userid: userid })
    .populate('userid', 'username image');
  } catch (error) {
    console.log('>>>>>>>>Get my post ERROR: ', error)
  }
  return [];
}


//add new post
const addNewPost = async (useridparam, content, image) => {
  try {
    const userid = new mongoose.Types.ObjectId(useridparam);
    const newPost = {
      userid,
      content,
      image,
    }
    await postModel.create(newPost);
    return true;
  } catch (error) {
    console.log('>>>>>>>Add new post ERROR:', error);

  }
  return false;
}
//Delete post by _id
const deletePost = async (postid) => {
  try {
    await postModel.findByIdAndDelete(postid);
    return true;
  } catch (error) {
    console.log('>>>>>>>>Delete post ERROR:', error);
  }
  return false;
}

//Edit post
const updatePost = async (_id, post) => {
  try {
    const postUpdate = await postModel.findByIdAndUpdate(_id, post, { new: true });
    if (postUpdate){
    return postUpdate;
    }
  } catch (error) {
    console.log(">>>>>>Update user  Error:", error);
  }
  return [];
};


//Like post
const likePost = async (userid, postid) => {
  try {
    const post = await postModel.findById(postid);
    const objectIdUserId = new mongoose.Types.ObjectId(userid);
    post.likes.addToSet(objectIdUserId);
    await post.save();
    return true;
  } catch (error) {
    console.log('>>>>>>>Add like post ERROR:', error);

  }
  return false;
}
//Like post
const unlikePost = async (userid, postid) => {
  try {
    const post = await postModel.findById(postid);
    const objectIdUserId = new mongoose.Types.ObjectId(userid);
    post.likes.pull(objectIdUserId);
    await post.save();
    return true;
  } catch (error) {
    console.log('>>>>>>>Add like post ERROR:', error);

  }
  return false;
}

//add comment 
const addCommentToPost = async (postid, userid, content) => {
  try {
    const comment = {
      userid,
      content,
    };
    await postModel.findByIdAndUpdate(
      postid,
      { $push: { comments: comment } },
      { new: true }
    );
    return true;
  } catch (error) {
    console.log('Error adding comment:', error);
    return false;
  }
};

//get comment of post
const getCommentsOfPost = async (postid) => {
  try {
    const post = await postModel.findById(postid).populate('comments.userid', 'username image');
    return post.comments;
  } catch (error) {
    console.log('Error getting comments:', error);
    return [];
  }
};


//saved post

const savePost = async (postid, userid) => {
  try {
    await userModel.findByIdAndUpdate(userid, { $push: { postSaved: new mongoose.Types.ObjectId(postid) } });
    await postModel.findByIdAndUpdate(postid, { $push: { saves: new mongoose.Types.ObjectId(userid) } });
    return true;
  } catch (error) {
    console.log('Error saving post:', error);
    return false;
  }
};

//unsave post

const unsavePost = async (postid, userid) => {
  try {
    await userModel.findByIdAndUpdate(userid, { $pull: { postSaved: new mongoose.Types.ObjectId(postid) } });
    await postModel.findByIdAndUpdate(postid, { $pull: { saves: new mongoose.Types.ObjectId(userid) } });
    return true;
  } catch (error) {
    console.log('Error unsaving post:', error);
    return false;
  }
};

//get saved post
const getSavedPosts = async (userid) => {
  try {
    const user = await userModel.findById(userid).populate({
      path: 'postSaved',
      populate: {
        path: 'userid',
        select: 'username image',
      },
    });
    if (user) {
      const savedPosts = user.postSaved.map((post) => {
        return {
          ...post.toObject(),
          username: post.userid.username,
        };
      });
      return savedPosts;
    }
    return [];
  } catch (error) {
    console.log('Error getting saved posts:', error);
    return [];
  }
};









module.exports = { addNewPost, deletePost, getAllPost, getMyPost, likePost, unlikePost , addCommentToPost,getCommentsOfPost,
  savePost,unsavePost, getSavedPosts,updatePost };