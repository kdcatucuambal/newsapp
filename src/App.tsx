import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import News from "./components/News";
import { Article } from "./models/news.model";
function App() {
  const [category, setCategory] = useState<string>("breaking-news");
  const [country, setCountry] = useState<string>("us");
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const consultAPI = async () => {
      const urlgnews = `https://gnews.io/api/v4/top-headlines?country=${country}&topic=${category}&token=b958e3795886d02aab779d15bc1dc480`;
      //const url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=f9f1b47fc8434d3b93531decd59562a5`;
      const response = await fetch(urlgnews);
      const responseJSON = await response.json();
      const news: Article[] = responseJSON.articles;
      setNews(news);
    };
    console.log(country, category);

    consultAPI();
  }, [category, country]);

  return (
    <Fragment>
      <Header title="SOFT NEWSCAST"></Header>
      <div className="container">
        <Form setCategory={setCategory} setCountry={setCountry}></Form>

        <News news={news}></News>
      </div>
      <footer className="text-center text-lg-start">
        <div className="text-center bg-primary text-white p-3">
          <h5>© 2021 Copyright</h5>
          <a
            className="text-white"
            href="https://github.com/kevin1999-david"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>Developed by Kevin Catucuamba</h5>
          </a>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
