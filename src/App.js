// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  // BrowserRouter as Router,
  BrowserRouter,
  Routes,
  Route,
  HashRouter
 
} from "react-router-dom";

// import { Routes, Route, HashRouter } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  
 let apikey=process.env.REACT_APP_NEWS_API
 
 const [progress, setprogress] = useState(25);
  // state=
  //   {
  //     progress:25
  //   }
  
  const setProgress=(progress)=>
   {
    setprogress(progress);
    // setState({progress:progress})
   }
  
 
    return (
   
      <HashRouter>
      
      
       <Navbar/>
       
       <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        // onLoaderFinished={() => setProgress(100)}
      />
      
       <Routes>
       <Route  exact path="/" element={<News setprogress ={setProgress} apikey={apikey} key ="home" pagesize={5} category='general'/>}/>
       <Route  exact path="/business" element={<News setprogress ={setProgress} apikey={apikey} key ="business" pagesize={5} category='business'/>}/>
       <Route  exact path="/entertainment" element={<News setprogress ={setProgress} apikey={apikey} key ="entertainment" pagesize={5} category='entertainment'/>}/>
       <Route  exact path="/general" element={<News setprogress ={setProgress} apikey={apikey} key ="general" pagesize={5} category='general'/>}/>
       <Route  exact path="/health" element={<News setprogress ={setProgress} apikey={apikey} key ="health" pagesize={5} category='health'/>}/>
       <Route exact path="/science" element={<News setprogress ={setProgress} apikey={apikey}  key ="science" pagesize={5} category='science'/>}/>
       <Route  exact path="/sports" element={<News setprogress ={setProgress} apikey={apikey} key ="sports" pagesize={5} category='sports'/>}/>
       <Route  exact path="/technology" element={<News setprogress ={setProgress} apikey={apikey} key ="technology" pagesize={5} category='technology'/>}/>
       </Routes>
     

     
      </HashRouter>
     
    );
  
}

export default App;