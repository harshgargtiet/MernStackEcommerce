
import './App.css';
import Header from "./component/layout/Header/Header.js";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import webFont from "webfontloader"
import React from "react" 
import {useState,useEffect} from 'react'
import axios from 'axios'
 import Footer from "./component/layout/Footer/Footer.js"
 import Home from "./component/Home/Home.js";
 import ProductDetails from "./component/Product/ProductDetails.js"

function App() {
  // const [ip, setIP] = useState('');

  // //creating function to load ip address from the API
  // const getData = async () => {
  //   const res = await axios.get('https://geolocation-db.com/json/')
  //   console.log(res.data);
  //   setIP(res.data.IPv4)
  // }
  
  // useEffect( () => {
  //   //passing getData method to the lifecycle method
  //   getData()

  // }, [])

  React.useEffect(()=>{
webFont.load({
  google:{
    families:["Roboto","Droid Sans","chilanka"],
  },
});

  },[]);
  return (
    //   <div className="App">
    //   <h2>Your IP Address is</h2>
    //   <h4>{ip}</h4>
    // </div>
    
     <Router>
      
       <Header/>
      <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes> 
      <Footer/>
    </Router>  

    
  );
}

export default App;
