import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class NewsItem extends Component {
  static defaultProps=
  {
    category:'science',
    pagesize:5
  }

  static propTypes =
  {
    category : PropTypes.string,
    pagesize: PropTypes.number
  }
   
  render() { 
    let {titles, description, imageurl, newsurl, author, date, sources} = this.props;
    return (
      <div className='my-3'>
       <div className="card">
        
       <span className=" badge rounded-pill bg-danger" style={{display: 'flex', right: '0', justifyContent: 'flex-end', position: 'absolute'}}>
           {sources}
   
  </span>
  
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{titles}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsurl} traget="_blank" className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>

      </div>
    );
  }
}

export default NewsItem;
