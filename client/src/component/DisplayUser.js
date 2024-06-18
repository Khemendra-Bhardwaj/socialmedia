import  React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
const UserProfile = ()=>{
    const {userId} = useParams()

    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [userData, setUserData] = useState({name : 'Dummy-name', email:'dummy@123'})
    const [userPosts,setUserPosts] = useState([]) 


    useEffect( ()=>{
        const fetchName = async()=>{
            const response = await axios.get(`http://localhost:5000/users/${userId}`);
            
            const receivedName = response.data[0].name, receivedEmail = response.data[0].email
            setUserData({
                name: receivedName,
                email: receivedEmail
            })

            const followersList = response.data[0].followers , followingList = response.data[0].following
            const postList = response.data[0].posts   

            console.log(followersList);
            console.log(followingList);

            setFollowing(followingList)
            setFollowers(followersList) 

            setUserPosts(postList) 
            console.log(postList);

        }
        fetchName()

    },[] )

    return (
    <>
        <div> 
            {/* fetch name email followers  following liked comments-add  posts-pushed */}
            <h3> Name {userData.name}  </h3>
            <h3> Email {userData.email} </h3>

            {/* TODO : Make Users Post displayed in styled Way , Pending to Add Liked Feature */}
            <h3> Posts </h3> 
            <ul> 
                {
                    userPosts.map( (post)=>( <li>{post.postid} : {post.title}  </li> ) )
                }
            </ul>

            <h3> Followers   </h3>  
            <ul> 
                {
                    followers.map( (user)=>( <li>{user.followingId}   </li> ) )
                }
            </ul>

            <h3> Following   </h3>
            <ul> 
                {
                    following.map( (user)=>( <li>{user.followerId}   </li> ) )
                }
            </ul>
            


        </div>

    </>
    )
}

export default UserProfile