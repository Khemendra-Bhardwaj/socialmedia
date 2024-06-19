import { Link } from "react-router-dom";
const FollowerList = ({followers})=>{
    return (
        <>
            <h2> Your Followers  </h2>
            <ul> 
                {
                    followers.map( (user)=>( 
                         <li key={user.followingId}> <Link to={`/user/${user.followingId}`} target="_blank" > {user.followingId} </Link>   </li>
                        
                        ) )
                }
            </ul>
        
        </>
    )
}

export  default  FollowerList; 