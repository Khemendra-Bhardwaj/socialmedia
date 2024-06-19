import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const likeComment = async(req,res)=>{
    const userid = parseInt(req.params.userid)
    const postid = parseInt(req.params.postid)
    const commentid = parseInt(req.params.commentid)

     try{
        const result= await prisma.like.create({
            data :{
                Author:{
                    connect : {userid : userid}
                },
                ParentPost :{
                    connect:{ postid: postid } 
                },
                ParentComment :{
                   connect : { commentid : commentid}
                }
            }
        })
        res.json(result)
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error : 'Error in Liking Comment '})
    }
}


const likePost = async(req,res)=>{
    const userid = parseInt(req.params.userid)
    const postid = parseInt(req.params.postid)

    try{
        const result = await prisma.like.create({
            data:{
                Author : {
                    connect: {userid: userid}
                },
                ParentPost:{
                   connect:{ postid: postid } 
                }
            }
        })
        res.json(result) 
    }
    catch(err){
        console.log(err);
        res.json({Error : 'Error in Liking Post'})
    }
}


const getLikeCountPost = async(req,res)=>{
    const postid = parseInt(req.params.postid)
    try{
        const result = await prisma.like.count({
            where:{
                postid: postid
            }
        })
        // res.json({ count: result });
        res.send({count : result }) 
        // console.log();
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : "Error in fetching Like count for post"})
    }
}

export {likePost, likeComment, getLikeCountPost}