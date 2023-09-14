import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize:8,
        category:'general'
      }

    static propType = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(){
        super();
        console.log("Constructur here from news component");
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    handlePreviousClick = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c838f43c72d4899a199e23511e0824c&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }

    handleNextClick = async() => {

        if(!(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize))){

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c838f43c72d4899a199e23511e0824c&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading: true
            })
            let data = await fetch(url)
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false 
            })
        }
        
    }


    async componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3c838f43c72d4899a199e23511e0824c&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles,
            totalArticles: parseData.totalResults,
            loading:false
        })
    } 

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin: '30px 0px'}}>News Monkey - Top Headlines</h2>
        {this.state.loading && <Spinner></Spinner>}
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  
                title={element.title?element.title.slice(0,45):'No title'}
                description={element.description?element.description.slice(0,88):"No Description"}
                imageUrl={element.urlToImage} newsUrl={element.url}>
            </NewsItem>
        </div>
        })}
            
        </div>

        <div className="container d-flex justify-content-between my-4">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News
