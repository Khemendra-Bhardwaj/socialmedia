import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient() 

const followUser  = async(req,res)=>{
    const followingid = parseInt(req.params.followingid,10);
    const followerid = parseInt(req.params.followerid,10) 

    try{
       const result =  await prisma.userFollow.create({
            data:{
                follower:{
                    connect : {userid : followerid}
                },
                following:{
                    connect : {userid :  followingid }
                }
            }
        })
        res.json(result)
    }
    catch(err){
        console.log(err);
        res.status(500).json({Error: "Error in Following User !"})
    }
}

export {followUser}