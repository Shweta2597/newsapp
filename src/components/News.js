import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[]
    constructor(){
        super();
        console.log("Constructur here from news component");
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=3c838f43c72d4899a199e23511e0824c";
        let data = await fetch(url)
        let parseData = await data.json();
        this.setState({
            articles: parseData.articles 
        })
    }

  render() {
    return (
      <div className='container my-3'> 
        <h2>News Monkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem  title={element.title?element.title.slice(0,45):'No title'} description={element.description?element.description.slice(0,88):"No Description"} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
        </div>
        })}
            
        </div>
      </div>
    )
  }
}

export default News
