import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const deleteComment = async(req,res)=>{
    const id  = parseInt(req.params.id,10)  
    try{
        await prisma.comment.delete({
            where:{
                commentid : id  
            }
        })
    }
    catch(err){
        console.log(err);
        res.json({Error : "Error in deleting comoment "})
    }
}

const deleteAllComments = async(postid)=>{
    await prisma.comment.deleteMany({
        where:{
            parentPostid: postid 
        }
    })
}

const deletePost = async(req,res)=>{
    const postId = parseInt(req.params.id,10);
    await deleteAllComments(postId) // deleting all commnets first in that post
    await prisma.post.delete({ 
        where:{postid: postId}
    })
}

async function deleteAllPost(userid) {
    await prisma.post.deleteMany({
        where: {
            authorid: parseInt(userid, 10)
        }
    })
}


const deleteFollowUnfollow  = async(userid)=>{
    try{
       await  prisma.userFollow.deleteMany({
            where:{
                OR:[
                    {followingId: parseInt(userid,10)} ,
                    {followerId: parseInt(userid,10)},
                ] 
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

/// on deleting a user : delete all its follow and unfollow []
const deleteUser  = async (req, res) => {
    const userid = parseInt(req.params.id, 10)
    console.log("User id " + userid);
    try {

        await deleteFollowUnfollow(userid)
        await deleteAllPost(userid) // referencial intergirity rule ! 

        await prisma.user.delete({
            where: {
                userid: userid
            }
        })
        res.json({ Status: "Deletion Done " })
    }
    catch (err) {
        console.error("Error deleting user:", err);

        res.status(500).json({ error: "Error in Deleting User !" })
    }
}

export {deleteComment, deletePost, deleteUser}
