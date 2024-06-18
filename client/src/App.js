import { useEffect,useState } from "react";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from "./component/DisplayUser";
import CreatePost from "./component/CreatePost";
function App() {



  return (
    <>

    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user/:userId" element={<UserProfile />} />
        <Route path = "user/:userId/addPost" element={ <CreatePost />} /> 
      </Routes>
    </Router>




    </>
  );
}

export default App;
