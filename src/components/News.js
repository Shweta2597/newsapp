import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';
import altimage from '../altimage.jpg'


export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propType = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    this.setState({
        page: this.state.page + 1 
    });
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    this.props.setProgress(40);
    let data = await fetch(url);
    this.props.setProgress(60);
    let parseData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }


  fetchMoreData = async() => {

    this.setState({
    })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
      page: this.state.page + 1,

    });
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

  async componentDidMount() {
    this.updateNews();
  }

  capiltalize(data) {
    let mData = data.charAt(0).toUpperCase() + data.slice(1, data.length);
    return mData;
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "30px 0px" }}>
          News Monkey - Top {this.capiltalize(this.props.category)} Headlines
        </h2>
        {/* {this.state.loading && <Spinner></Spinner>} */}
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={(this.state.totalResults%this.state.articles.length)!==0}
        loader={this.state.loading && <Spinner></Spinner>}
        >
            <div className="container">
        <div className="row">
          {
            this.state.articles.map((element) => {
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
              Math.ceil(this.state.totalResults / this.props.pageSize)
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
}

export default News;
