import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import News from "./components/News";
import { Article } from "./models/news.model";
function App() {
  const [category, setCategory] = useState<string>("");
  const [news, setNews] = useState<Article[]>([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=f9f1b47fc8434d3b93531decd59562a5`;
      const response = await fetch(url);
      const responseJSON = await response.json();
      const news: Article[] = responseJSON.articles;
      setNews(news);
    
      
    };

    consultAPI();
  }, [category]);

  return (
    <Fragment>
      <Header title="SOFT NEWSCAST"></Header>
      <div className="container white">
        <Form setCategory={setCategory}></Form>

        <News news={news}></News>
      </div>
    </Fragment>
  );
}

export default App;
