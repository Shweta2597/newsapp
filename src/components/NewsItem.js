import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title,description,imageUrl,newsUrl,author,time,source} = this.props
    return (
            <div className='my-3'>
                <div className="card">
                <span class="position-absolute top-0 start-50 translate-middle badge bg-danger">
                    {source}
                    <span class="visually-hidden">unread messages</span>
                </span>
                <img src={imageUrl} style={{width:'fit width' , height:"12rem"}} className="card-img-top" alt="No image..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div class="card-footer text-muted my-3" style={{border:"none"}}>
                        By {author} on {new Date(time).toUTCString()}
                     </div>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
                </div>
            </div>
    )
  }
}

export default NewsItem
