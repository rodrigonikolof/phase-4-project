import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Page2 from "./pages/page2";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import MyEnrolments from "./pages/MyEnrolments";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);
  const [enrolments, setEnrolments] = useState(null)

  useEffect(() => {
    fetch("/me").then((r)=> {
      if (r.ok){
        r.json().then((user)=> setUser(user))
      }
    })
  }, []);

  const getEnrolments = async()=>{
    let response = await fetch("/enrolments")
    let data = await response.json()
    setEnrolments(data)
}

useEffect(()=>{
console.log(enrolments)
if (enrolments === null){getEnrolments()}
// else {console.log(enrolments)}
},[])

  if (!user) return <Login onLogin={setUser} />;

  return (
<>
    <Navbar user={user} setUser={setUser}/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/enrolments" element={<MyEnrolments enrolments={enrolments} setEnrolments={setEnrolments}/>}/>
      <Route path="/courses" element={<Courses enrolments={enrolments} setEnrolments={setEnrolments} user={user}/>}/>
      <Route path="/profile" element={<Profile user={user}/>}/>
      
      
    </Routes>
</>
  );
}

export default App;
