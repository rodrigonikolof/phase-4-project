import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import MyEnrolments from "./pages/MyEnrolments";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r)=> {
      if (r.ok){
        r.json().then((user)=> setUser(user))
      }
    })
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
<>
    <Navbar user={user} setUser={setUser}/>
    <h1>Logged in!</h1>
    <Routes>
      

      <Route path="/" element={<MyEnrolments user={user}/>}/>
      <Route path="/testing" element={<Page2/>}/>
      
    </Routes>
</>
  );
}

export default App;
