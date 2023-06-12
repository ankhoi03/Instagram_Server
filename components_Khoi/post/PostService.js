const postModel = require('./PostModel');
const mongoose=require('mongoose');
//get all post
const getAllPost = async () => {
  try {
    return await postModel.find();
  } catch (error) {
    console.log('>>>>>>>>Get all post ERROR: ', error)
  }
  return [];
}

const getMyPost = async (userid) => {
  try {
    return await postModel.find({ userid: userid });
  } catch (error) {
    console.log('>>>>>>>>Get my post ERROR: ', error)
  }
  return [];
}


//add new post
const addNewPost = async (userid, username, content, image) => {
  try {
    const newPost = {
      userid,
      username,
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


//Like post
const likePost = async (userid, postid) => {
  try {
    const post = await postModel.findById(postid);
    const objectIdUserId =new mongoose.Types.ObjectId(userid);
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
    const objectIdUserId =new mongoose.Types.ObjectId(userid);
    post.likes.pull(objectIdUserId);
    await post.save();
    return true;
  } catch (error) {
    console.log('>>>>>>>Add like post ERROR:', error);

  }
  return false;
}


module.exports = { addNewPost,deletePost, getAllPost, getMyPost,likePost,unlikePost };