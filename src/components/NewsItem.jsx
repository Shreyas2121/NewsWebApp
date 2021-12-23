import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://images.cnbctv18.com/wp-content/uploads/2021/12/investing-stocks-stock-market-1019x573.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              {" "}
              <small className="text-muted">
                {" "}
                Published on {new Date(date).toUTCString()}{" "}
              </small>{" "}
            </p>
            <a
              href={newsUrl}
              target="norefererrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
