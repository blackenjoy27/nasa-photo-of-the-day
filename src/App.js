import React, {useState, useEffect} from "react";
import Picture from "./components/Picture/Picture"
import axios from 'axios';

import "./App.css";

function App() {

  const [picture, setPicture] = useState(null);

  useEffect(()=>{
     axios.get(`https://api.nasa.gov/planetary/apod?api_key=Zmt6xsAK3PQRcllRCf1oSM2MMJiEXGW2ngLq8ihx`)
     .then((res)=>{
       
       setPicture(res.data); 
     })
     .catch((error)=>{
       console.log("Something Went Wrong")
     })
   },[])
  return (
      <div>
        {
          picture && <Picture picture={picture} />
        }
      </div>
  );
}

export default App;
