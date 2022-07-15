import './App.css';
import * as contentful from "contentful";
import { useEffect, useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import HS_container from "./routes/HS_container";
import NS_container from "./routes/NS_container";
import VS_container from "./routes/VS_container";
import HS_element from "./components/HS_element";
import VS_element from "./components/VS_element";
import NS_element from "./components/NS_element";
import Pagecontainer from './routes/Pagecontainer';

function App() {

  const myAPI = contentful.createClient({
  space: "71z4boqcwsu8",
  accessToken: "ABPR2uppJ_OyYtstFK3_H2-D4_3Qujcri1s8Kn8C1ww",
  });

  const [filteredHS, setFilteredHS] = useState([]);
  const [filteredVS, setFilteredVS] = useState([]);
  const [filteredNS, setFilteredNS] = useState([]);

  const foodFilter = (items) => {
      setFilteredHS(items.filter(item => item.fields.type === "hs"))
      setFilteredVS(items.filter(item => item.fields.type === "vs"))
      setFilteredNS(items.filter(item => item.fields.type === "ns"))
  }

  // useEffect(() => {
  //   myAPI.getEntries("cookBook")
  //   .then(res => setState(res.items))
  // }, [])

  const getFetch = async () => {
    const res = await myAPI.getEntries("cookBook");
    foodFilter(res.items);
  }

  useEffect(() => {
    try {
      getFetch();
    } catch (error) {
      console.log("Error: " + error);
    }
  }, []);

  return (
      <Routes >
        <Route path="/" element={<Pagecontainer />} >
          <Route path="/hauptspeise" element={<HS_container foodHS={filteredHS} />}>
            <Route path=":foodId" element={<HS_element foodState={filteredHS} />}/>
            <Route index element={<p>Wählen Sie eine leckere Hauptspeise aus!</p> } />
          </Route>
          <Route path="/vorspeise" element={<VS_container foodVS={filteredVS}/>} >
            <Route path=":foodId" element={<VS_element foodState={filteredVS} />}/>
            <Route index element={<p>Wählen Sie eine leckere Vorspeise aus!</p> } />
          </Route>
          <Route path="/nachspeise" element={<NS_container foodNS={filteredNS}/>} >
            <Route path=":foodId" element={<NS_element foodState={filteredNS} />}/>
            <Route index element={<p>Wählen Sie eine leckere Nachspeise aus!</p> } />
          </Route>
          <Route
            path="*"
            element={<p>Nothing here!</p>}
          />
        </Route>
      </Routes>
  );
}

export default App;
