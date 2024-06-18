import { useEffect,useState } from "react";
import Card from "./component/Card";

function App() {
  const [posts,setPosts] = useState([{"title":'meow'}])

 useEffect( ()=>{
  const fetchPosts = async()=>{
    try{

      // TODO: fetch limited/latest posts 
      const response = await fetch('http://localhost:5000/post');
      const data = await response.json() 
      setPosts(data) 
    } 
    catch(err){
      console.log("error fetching post ", err);
    }
  }
  fetchPosts()
 }, [])


  return (
    <>

<div className="App">
  {/* TODO : Add User Name  */}
      {posts.map((post) => (
        <Card key={post.id} title={post.title} content={post.content} postid={post.postid} />
      ))}
    </div>
      
        
    </>
  );
}

export default App;
