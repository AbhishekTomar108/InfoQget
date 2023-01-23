import React, { Component } from 'react';
import PropTypes from 'prop-types';


const NewsItem = (props)=> {
  
    return (
      <div className='my-3'>
       <div className="card">
        
       <span className=" badge rounded-pill bg-danger" style={{display: 'flex', right: '0', justifyContent: 'flex-end', position: 'absolute'}}>
           {props.sources}
   
  </span>
  
  <img src={props.imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.titles}...</h5>
    <p className="card-text">{props.description}...</p>
    <p className="card-text"><small className="text-muted">By {props.author} on {new Date(props.date).toGMTString()}</small></p>
    <a href={props.newsurl} traget="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>

      </div>
    );
  
}

export default NewsItem;
