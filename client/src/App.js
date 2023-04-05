import React, { useEffect, useState } from "react";
import {Routes, Route} from 'react-router-dom';
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
<>
    <h1>Page Count: {count}</h1>
    <Routes>
      

      <Route path="/" element={<Page1/>}/>
      <Route path="/testing" element={<Page2/>}/>
      
    </Routes>
</>
  );
}

export default App;
