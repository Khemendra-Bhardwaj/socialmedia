import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const unfollowUser = async(req,res)=>{
    const childId = parseInt(req.params.followerid, 10);
    const parentId = parseInt(req.params.followingid, 10)
    console.log(childId + " <=>  "+ parentId); 
    try{

        await prisma.userFollow.deleteMany({
            where:{
                
                    followerId: childId,
                    followingId : parentId
                
            }
        })
        res.status(200).json({ message: "Unfollowed successfully" });

    }
    catch(err){ 
        console.log(err);
        res.status(500).json({Error : "Error in unfollowing User !"})
    }

}
export {unfollowUser}