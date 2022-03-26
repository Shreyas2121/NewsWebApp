import React, { Component, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const News = ({ country, category, apiKey, pageSize, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${page}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
    setloading(true);
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    console.log(parsedData);
    setProgress(70);

    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

    setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&page=${
      page + 1
    }&category=${category}&apiKey=${apiKey}&page=1&pageSize=${pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h2 className="text-center">NewsApp - Top Headlines</h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={article.title ? article.title : ""}
                  description={article.description ? article.description : ""}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  date={article.publishedAt}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
