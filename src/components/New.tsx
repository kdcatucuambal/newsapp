import React from "react";
import { Article } from "../models/news.model";
type Props = {
  _new: Article;
};
const New = ({ _new }: Props) => {
  const image = _new.urlToImage ? (
    <div className="card-image">
      <img src={_new.urlToImage} alt={_new.title} />
      <span className="card-title">{_new.source.name}</span>
    </div>
  ) : null;
  return (
    

     
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h3>{_new.title}</h3>
          <p>{_new.description}</p>
        </div>
        <div className="card-action">
          <a
            href={_new.url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            View
          </a>
        </div>
      </div>
    </div>
  
  );
};

export default New;
