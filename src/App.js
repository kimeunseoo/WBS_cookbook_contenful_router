import './App.css';
import * as contentful from "contentful";
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HS from "./routes/HS";
import NS from "./routes/NS";
import VS from "./routes/VS";
import Navbar from './routes/Navbar';

function App() {

  const myAPI = contentful.createClient({
  space: "71z4boqcwsu8",
  accessToken: "ABPR2uppJ_OyYtstFK3_H2-D4_3Qujcri1s8Kn8C1ww",
  });

  const [state, setState] = useState()

  useEffect(() => {
    myAPI.getEntries("cookBook")
    .then(res => setState(res.items))
  }, [])
  

  return (

    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Navbar />} >
          <Route path="/hauptspeise" element={<HS foodHS={state}/>}/>
          <Route path="/vorspeise" element={<VS foodVS={state}/>} />
          <Route path="/nachspeise" element={<NS foodNS={state}/>} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;

//pagecontainer