import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
            <div className='my-3'>
                <div className="card">
                <img src={imageUrl} style={{width:'fit width' , height:"12rem"}} className="card-img-top" alt="No image..."/>
                <div className="card-body">
                    <h5 className="card-title" data-bs-toggle="tooltip" style={{height:"4rem"}}>{title}...</h5>
                    <p className="card-text" style={{height:"6rem"}}>{description}...</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
            </div>
    )
  }
}

export default NewsItem
