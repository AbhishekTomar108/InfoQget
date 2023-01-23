import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props)=> {
    
   const [articles, setarticles] = useState([])
  //  const [loading, setloading] = useState(false)
   const [page, setpage] = useState(1)
   const [totalresults, settotalresults] = useState(0)


    const capitalize = (text)=>
    {
       return text.charAt(0).toUpperCase()+text.slice(1);
    }
    useEffect(() => {
    
      updatenews();
    }, []);
    // async componentDidMount()
    // {
    //     console.log("from cdm");
        
    // }

    const updatenews = async()=>
    {
      // this.setState({loading:true}) 
      // console.log("i am news previous");
      console.log(props.apikey);
      document.title=`${capitalize(props.category)}-InfoQget`;
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
      props.setprogress(40);
      let data = await fetch(url);
      props.setprogress(80);
      let parseddata = await data.json();
      props.setprogress(100);
      console.log("type of articles is "+typeof(articles));

      console.log('chal rha h parsedata se pehle');
      setarticles(parseddata.articles);
        settotalresults(parseddata.totalResults)

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

    const fetchMoreData = async() => {
      // this.setState({loading:true})
      setpage(page+1);
     
      document.title=`${capitalize(props.category)}-InfoQget`;
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
      let data = await fetch(url);

      let parseddata = await data.json()    
      setarticles(articles.concat(parseddata.articles));
      settotalresults(parseddata.totalResults)
      console.log("i am from fetchmore "+articles.length,typeof(articles),page);
      // this.setState({articles: this.state.articles.concat(parseddata.articles), totalresults:parseddata.totalResults});
          // this.setState({articles: this.state.articles.concat(this.state.articles)})
      
    };

  
    
    return (
     <>
        <h2 className='text-center my-3'>InfoQget-Top {props.category} Headlines</h2>
      
       <InfiniteScroll
  dataLength={articles.length} //This is important field to render the next data
  next={fetchMoreData}
  hasMore={articles.length!==totalresults}
  loader={<Spinner/>}
  >
  
     <div className="container">
        <div className="row my-3">
            {articles.map((element)=>
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

export default News;
