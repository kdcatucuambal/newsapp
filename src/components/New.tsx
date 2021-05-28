import { Article } from "../models/news.model";
import ReactHtmlParser from "react-html-parser";
type Props = {
  _new: Article;
};
const New = ({ _new }: Props) => {
  const image = _new.urlToImage ? (
    <img src={_new.urlToImage} className="card-img-top" alt={_new.title} />
  ) : null;

  const author =
    _new.author == null ? null : (
      <small className="text-muted">{_new.author + " - "}</small>
    );
  return (
    <div className="card">
      {image}
      <div className="card-body">
        <h5 className="card-title">
          <strong>{_new.title}</strong>
          <div className="mt-2">
            {author}
            <small className="text-muted">
              {new Date(_new.publishedAt).toLocaleDateString()}
            </small>
          </div>
        </h5>
        <p className="card-text text-justify">
          {ReactHtmlParser(_new.description)}
        </p>

        <a
          href={_new.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-block"
        >
          View
        </a>
      </div>
    </div>
  );
};

export default New;
