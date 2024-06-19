import {Link} from 'react-router-dom'
const FollowingList = ({following})=>{
    return (
        <>
            <h2> Your Following  </h2>
            <ul> 
                {
                    following.map( (user)=>( 
                         <li key={user.followerId}> <Link to={`/user/${user.followerId}`} target="_blank" > {user.followerId} </Link>   </li>
                        
                        ) )
                }
            </ul>
        
        </>
    )
}

export  default  FollowingList; 