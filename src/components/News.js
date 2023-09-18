import React, { useEffect, useLayoutEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
import altimage from '../altimage.jpg'


const News = (props) => {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState()


  const updateNews = async() => {
    setPage(page + 1)
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(40);
    let data = await fetch(url);
    props.setProgress(60);
    let parseData = await data.json();
    props.setProgress(80);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }


  const fetchMoreData = async() => {

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true)

    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults)
    setLoading(false)
    setPage(page+1)
  }

//   handlePreviousClick = async () => {
//     this.setState({
//       page: this.state.page - 1,
//     });
//     this.updateNews();
//   };

//   handleNextClick = async () => {
//     this.setState({
//       page: this.state.page + 1,
//     });
//     this.updateNews();
//   };

  useEffect(() => {
    updateNews();
  }, []);

  const capiltalize = (data) => {
    let mData = data.charAt(0).toUpperCase() + data.slice(1, data.length);
    return mData;
  }

    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "30px 0px" , marginTop: "90px"}}>
          News Monkey - Top {capiltalize(props.category)} Headlines
        </h2>
        {/* {this.state.loading && <Spinner></Spinner>} */}
        <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={(totalResults%articles.length)!==0}
        loader={loading && <Spinner></Spinner>}
        >
            <div className="container">
        <div className="row">
          {
            articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : "No title"}
                    description={
                      element.description
                        ? element.description
                        : "No Description"
                    }
                    imageUrl={element.urlToImage===null?altimage:element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    time={element.publishedAt}
                    source={element.source.name}
                  ></NewsItem>
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-4">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
}

PropTypes.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

PropTypes.propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

export default News;
