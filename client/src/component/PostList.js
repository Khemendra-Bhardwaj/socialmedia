import {Link} from 'react-router-dom'
// import ComeBackHome from './ComeBackHome';

const PostList = ({userPosts, userid})=>{
    return (
        <>
            <Link to= {`/user/${userid}/addPost`} > Create Post ?    </Link>
            <h3> Posts </h3> 
            <ul> 
                {
                    userPosts.map( (post)=>( <li>{post.postid} : {post.title}  </li> ) )
                }
            </ul>

        </>
    )
}

export default PostList;  