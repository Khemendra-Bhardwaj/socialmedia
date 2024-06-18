import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';


const Card = ({ title, content,postid , userid }) => { //  received postid as prop from App.js
  const [comments, setComments] = useState([])
  const [userComment, setUserComment] = useState('')

  
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


  

  return (
    <div className="card">
      {/* fetch user-name from userid  */}
      <h2 className='user-name'>  dummy-user-name-asofNow </h2>
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content} </p>
      <button className="card-button" onClick={handleFetchComments}>Comments</button>
      <textarea onChange={(e)=>setUserComment(e.target.value)} value={userComment} placeholder='Write Comment ...' />   
      <button  className="card-button" onClick={handlePushUserComment} > PostComment </button>

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