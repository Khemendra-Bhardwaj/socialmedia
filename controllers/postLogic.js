import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

const addUser = async (req, res) => {
    const { name, email } = req.body
    console.log(name + "  " + email);
    try {
        const result = await prisma.user.create({
            data: {
                name: name,
                email: email
            }
        })
        res.json(result)
    }
    catch (err) {
        console.log(err);
    }
}

const addPost  = async (req, res) => {
    const { title, authorid } = req.body
    console.log(title + "  " + authorid);
    try {
        const result = await prisma.post.create({
            data: {
                title: title,
                author: {
                    connect: { userid: parseInt(authorid,10)   },
                }
            }
        })
        res.json(result);
    }
    catch (err) {
        res.status(500).json({ error: "Error in Creating Post  !" })
    }
}

const addComment = async (req, res) => {
    const { content } = req.body
    const parentPostid = parseInt(req.params.id, 10)
    console.log(content + "  " + parentPostid);
    try {
        const result = await prisma.comment.create({

            data: {
                content: content,
                parentPost: {
                    connect: {
                        postid: parentPostid
                    }
                },
            }
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Error in Posting Commnet !" })
    }
}

export {addUser, addPost, addComment}
