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


const addNewPost= async (useridparam,content,image)=>{
    try {
         return await postService.addNewPost(useridparam,content,image);   
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

 const addCommentToPost= async (postid, userid, content)=>{
     try {
          return await postService.addCommentToPost(postid, userid, content);   
     } catch (error) {
          throw error;
     }
    
 }

 const getCommentsOfPost= async (postid)=>{
     try {
          return await postService.getCommentsOfPost(postid);   
     } catch (error) {
          throw error;
     }
    
 }

 const savePost= async (postid, userid)=>{
     try {
          return await postService.savePost(postid, userid);   
     } catch (error) {
          throw error;
     }
    
 }

 const unsavePost= async (postid, userid)=>{
     try {
          return await postService.unsavePost(postid, userid);   
     } catch (error) {
          throw error;
     }
    
 }

 const getSavedPosts= async (userid)=>{
     try {
          return await postService.getSavedPosts(userid);   
     } catch (error) {
          throw error;
     }
    
 }

 const   updatePost = async (_id,content,image) => {
     try {
       const postUpdate = await postService.updatePost(_id, {
        content,
        image
       });
       return postUpdate;
     } catch (error) {
       throw error;
     }
   };
   


module.exports = { addNewPost,deletePost,getAllPost,getMyPost,likePost,unlikePost,addCommentToPost,getCommentsOfPost,
     savePost,unsavePost, getSavedPosts,updatePost};