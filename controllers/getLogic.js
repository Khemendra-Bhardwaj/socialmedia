import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const getUser  = async (req, res) => {
    try {
        const result = await prisma.user.findMany({
            include: {
                posts: true,
                followers: true,
                following : true 
            }
        })
        res.send(result)
    }
    catch (err) {
        res.status(500).json({ error: "Error in Getting Users !" })
    }
}

const getPosts = async (req, res) => {
    try {
        const result = await prisma.post.findMany({
            include: {
                comment: true
            }
        })
        res.json(result)
    }
    catch (err) {
        res.status(500).json({ error: "Error in fetching Posts ! " })
    }

}

const getComment = async (req, res) => {
    const id = parseInt(req.params.id) 
    try {
        const results = await prisma.comment.findMany({
            where:{
                parentPostid : id 
            }
        });

        res.json(results)
    }
    catch (err) {
        console.log(err);
        res.status(500).send("Error in fetching Users  Comments ")
    }
}
export  {getUser, getPosts , getComment}; 
// export default getUtisl ={ getUser:  getUser} 

