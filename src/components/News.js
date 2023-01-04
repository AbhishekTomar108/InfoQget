import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
    
   

   constructor()
    {
        super();
        console.log("i am news constructor");
        
        this.state= 
            {
                articles:[],
                loading:false,
                page:1,
                totalresults:1
                
            }
        
       
    }

    capitalize = (text)=>
    {
       return text.charAt(0).toUpperCase()+text.slice(1);
    }
    async componentDidMount()
    {
        console.log("from cdm");
         this.updatenews();
    }

    updatenews = async()=>
    {
      // this.setState({loading:true})
      // console.log("i am news previous");
      console.log(this.props.apikey);
      document.title=`${this.capitalize(this.props.category)}-InfoQget`;
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
      this.props.setprogress(40);
      let data = await fetch(url);
      this.props.setprogress(80);
      let parseddata = await data.json();
      this.props.setprogress(100);
      console.log(parseddata);

      console.log('chal rha h parsedata se pehle');
      this.setState({articles: parseddata.articles, totalresults:parseddata.totalResults});

    }

    // previouspage= async()=>
    // {
    
    //   this.setState({ page:this.state.page-1});
    //   this.updatenews();

    // }

    // nextpage= async()=>
    // {
      
    //   this.setState({page:this.state.page+1});
    //   this.updatenews();
      
    // }

    fetchMoreData = async() => {
      // this.setState({loading:true})
      this.setState({page:this.state.page+1});
      // console.log("i am news previous");
      document.title=`${this.capitalize(this.props.category)}-InfoQget`;
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
      let data = await fetch(url);

      let parseddata = await data.json();
      console.log(parseddata);

      console.log('chal rha h parsedata se pehle');
      this.setState({articles: this.state.articles.concat(parseddata.articles), totalresults:parseddata.totalResults});
          // this.setState({articles: this.state.articles.concat(this.state.articles)})
      
    };

  render() {
    // console.log("i am news render");
    return (
     <>
        <h2 className='text-center my-3'>InfoQget-Top {this.props.category} Headlines</h2>
      
       <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchMoreData}
  hasMore={this.state.articles.length!==this.state.totalresults}
  loader={<Spinner/>}
  >
  
     <div className="container">
        <div className="row my-3">
          
            {this.state.articles.map((element)=>
            { return <div className="col-md-4" key={element.url}>
           <NewsItem
              titles={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,87):""}
              imageurl={element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"}
              newsurl={element.url}
              author={element.author?element.author:"Unknown"}
              date = {element.publishedAt}
              sources= {element.source.name}
            />
          </div>})}
         
          </div>
          </div>
          </InfiniteScroll>
         
  </>
    );
  }
}

export default News;
