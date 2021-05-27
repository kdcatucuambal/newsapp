import React from "react";
import { Article } from "../models/news.model";
import New from "./New";
type Props = {
  news: Article[];
};

const News = ({ news }: Props) => {
  return (
    <div className="row">
      {news.map((_new) => (
        <New key={_new.url} _new={_new}></New>
      ))}
    </div>
  );
};

export default News;
