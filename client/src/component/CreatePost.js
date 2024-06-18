import React from "react"
import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router"

const CreatePost = ()=>{
const [title, setTitle] = useState('')
const {userId} = useParams()

const handleCreatePost = async()=>{
    console.log(userId);
    try{

        const newUserPost = {
            title: title
        } 
        
            const response = await axios.post(`http://localhost:5000/post/${userId}`, newUserPost);
            alert("Post Created Successfully ! ")

    }
    catch(err){
        console.log(err);
    }
}
    return(
        <>
        <textarea placeholder="Enter Title For your post !" onChange={(e)=>{setTitle(e.target.value)}}/>
        <button onClick={handleCreatePost}> CreatePost </button>  
            
        </>
    )
}
export default CreatePost