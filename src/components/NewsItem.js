import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, time, source } = props;
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src={imageUrl}
            style={{ width: "fit width", height: "12rem" }}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div
              className="card-footer text-muted my-3"
              style={{ border: "none" }}
            >
              By {author} on {new Date(time).toUTCString()}
            </div>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
