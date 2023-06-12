const postService = require('./PostService');


const getAllPost= async ()=>{
     try {
          return await postService.getAllPost();
     } catch (error) {
        throw error;  
     }
    
}

const getMyPost= async (userid)=>{
     try {
          return await postService.getMyPost(userid);
     } catch (error) {
        throw error;  
     }
    
}


const addNewPost= async (userid,username,content,image)=>{
    try {
         return await postService.addNewPost(userid,username,content,image);   
    } catch (error) {
         throw error;
    }
   
}


const deletePost= async (postid)=>{
     try {
          return await postService.deletePost(postid);   
     } catch (error) {
          throw error;
     }
    
 }


const likePost= async (userid,postid)=>{
     try {
          return await postService.likePost(userid,postid);   
     } catch (error) {
          throw error;
     }
    
 }

 const unlikePost= async (userid,postid)=>{
     try {
          return await postService.unlikePost(userid,postid);   
     } catch (error) {
          throw error;
     }
    
 }

module.exports = { addNewPost,deletePost,getAllPost,getMyPost,likePost,unlikePost};