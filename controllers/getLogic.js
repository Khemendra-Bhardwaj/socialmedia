import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const getUser  = async (req, res) => {
    try {
        const result = await prisma.user.findMany({
            include: {
                posts: true
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
    try {
        const results = await prisma.user.findMany({
            select: {
                name: true,
                posts: {
                    select: {
                        comment: true
                    }
                }
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
