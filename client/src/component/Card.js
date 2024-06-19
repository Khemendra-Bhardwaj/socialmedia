import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';
import { AiOutlineLike } from "react-icons/ai";



const Card = ({ title, content,postid , userid }) => { //  received postid as prop from App.js
  const [comments, setComments] = useState([])
  const [userComment, setUserComment] = useState('')
  const [userName, setUserName]  = useState("Dummy-Name-AsofNow") 
  const [likeCounter, setLikeCounter]  = useState(0)

  useEffect( ()=>{
    const getUserName = async()=>{
      const response = await axios.get(`http://localhost:5000/users/${userid}`);   
      const receivedName = response.data[0].name
      setUserName(receivedName) 
    }
    const getLikeCount = async ()=>{
      const response = await axios.get(`http://localhost:5000/like/likeCounter/${postid}`)
      const {count} = response.data 
      setLikeCounter(count)
    }
    
    getUserName()
    getLikeCount()

  }
, [] )

  const handleFetchComments = async()=>{
    try{
      const response = await axios.get(`http://localhost:5000/comments/${postid}`)
      console.log(postid);
      setComments(response.data)
      console.log(response.data);
    }
    catch(err){
      console.log(err);
    }
  }

  const handlePushUserComment = async()=>{
    try{
      // content and parentpost id 
      const postData = {
        content : userComment 
      }
      setUserComment('')

      const response  = await axios.post(`http://localhost:5000/comments/${postid}`, postData)
      console.log('Comment Posted to ' + postid);

      await handleFetchComments(); 
      
    }
    catch(er){
      console.log(er);
    }
  } // TODO : after updating comment : New Comment Should reflecte simiulatenouly 

  const handleUserClick = () => {
    window.open(`/user/${userid}`, '_blank'); // Opens new tab with user profile page
  };
  
  const handlePostLike = async()=>{
    try{
      const result = await axios.post(`http://localhost:5000/users/like/${userid}/${postid}`,{})
      alert('Liked Done ')
     } 
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="card">
      {/* fetch user-name from userid  */}
      <h4 className='user-name' onClick={handleUserClick} style={{ cursor: 'pointer' }} > Author {userName}  </h4>


      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content} </p>
      <button className="card-button" onClick={handleFetchComments}>Comments</button>
      <textarea onChange={(e)=>setUserComment(e.target.value)} value={userComment} placeholder='Write Comment ...' />   
      <button  className="card-button" onClick={handlePushUserComment} > PostComment </button>
      <button onClick={handlePostLike} > <AiOutlineLike  style={ {width:'100px', height : '20px' }}/>  </button> 
      <p> Like Counter {likeCounter}</p>
      <div className="comment-list">
        {comments.length > 0 && (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment.content}</li> // Adjust according to your comment structure
            ))}
          </ul>
        )}
      </div>


    </div>
  );
};

export default Card;