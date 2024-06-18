import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()


const updateUser = async (req, res) => {
    const { updatedName, id } = req.body
    console.log(updatedName + "  " + id);
    try {
        const result = await prisma.user.update({
            where: {
                userid: id
            },
            data: {
                name: updatedName,
            }

        })
        res.json(result)
    }
    catch (err) {
        res.status(500).json({ error: "Error in updating user !" })
    }
}

const updatePost = async (req, res) => {
    const { title } = req.body
    const postid = parseInt(req.params.id, 10)
    console.log(title + "  " + postid);
    try {
        const result = await prisma.post.update({
            where: {
                postid: postid
            },
            data: {
                title: title,
            }
        })
        res.json(result)
    }
    catch (err) {
        res.status(500).json({ error: "Error in updating Posst " })
    }
    // this updated post should be reflected in users  
}


const updateComment = async(req,res)=>{
    const commendId = parseInt(req.params.id,10)  ; 
    const {newContent}  = req.body 
    console.log(commendId);
    try{
        const result =await  prisma.comment.update({
            where:{
                commentid: commendId 
            },
            data: {
                content :  newContent 
            }
        })
        res.json(result )
    }
    catch(err){
        console.log(err);
        res.json({Error : "Error in updating comment "})
    }
}


export {updateUser, updatePost, updateComment}
