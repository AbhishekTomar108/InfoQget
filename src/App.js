// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
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

export default class App extends Component {
  name='abhi';
 apikey=process.env.REACT_APP_NEWS_API
 
  state=
    {
      progress:25
    }
  
   setProgress=(progress)=>
   {
    console.log(this.apikey);
    this.setState({progress:progress})
   }
  
  render() {
    return (
   
      <HashRouter>
      
      
       <Navbar/>
       
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
        // onLoaderFinished={() => this.setProgress(100)}
      />
      
       <Routes>
       <Route  exact path="/" element={<News setprogress ={this.setProgress} apikey={this.apikey} key ="home" pagesize={5} category='general'/>}/>
       <Route  exact path="/business" element={<News setprogress ={this.setProgress} apikey={this.apikey} key ="business" pagesize={5} category='business'/>}/>
       <Route  exact path="/entertainment" element={<News setprogress ={this.setProgress} apikey={this.apikey} key ="entertainment" pagesize={5} category='entertainment'/>}/>
       <Route  exact path="/general" element={<News setprogress ={this.setProgress} apikey={this.apikey} key ="general" pagesize={5} category='general'/>}/>
       <Route  exact path="/health" element={<News setprogress ={this.setProgress} apikey={this.apikey} key ="health" pagesize={5} category='health'/>}/>
       <Route exact path="/science" element={<News setprogress ={this.setProgress} apikey={this.apikey}  key ="science" pagesize={5} category='science'/>}/>
       <Route  exact path="/sports" element={<News setprogress ={this.setProgress} apikey={this.apikey} key ="sports" pagesize={5} category='sports'/>}/>
       <Route  exact path="/technology" element={<News setprogress ={this.setProgress} apikey={this.apikey} key ="technology" pagesize={5} category='technology'/>}/>
       </Routes>
     

     
      </HashRouter>
     
    );
  }
}

