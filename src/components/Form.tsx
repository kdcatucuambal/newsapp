import React, { useEffect } from "react";
import styles from "./Form.module.css";
import useSelect from "./../hooks/useSelect";
import { Category } from "../models/news.model";

interface Props {
  setCategory(category: string): void;
  setCountry(country: string): void;
}

const Form = ({ setCategory, setCountry }: Props) => {
  const options: Category[] = [
    { label: "Breaking-News", value: "breaking-news" },
    { label: "Business", value: "business" },
    { label: "Entertainment", value: "entertainment" },
    { label: "World", value: "world" },
    { label: "Nation", value: "nation" },
    { label: "Health", value: "health" },
    { label: "Science", value: "science" },
    { label: "Sports", value: "sports" },
    { label: "Technology", value: "technology" },
  ];

  // breaking-news, world, nation, business, technology, entertainment, sports, science and health.
  const countries: Category[] = [
    { label: "Australia", value: "au" },
    { label: "Brazil", value: "br" },
    { label: "Belgium", value: "be" },
    { label: "Canada", value: "ca" },
    { label: "United States", value: "us" },
    { label: "Portugal", value: "pt" },
    { label: "United Kingdom", value: "gb" },
    { label: "Peru", value: "pe" },
  ];

  const [category, country, Select] = useSelect(
    "breaking-news",
    options,
    "us",
    countries
  );

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (category === "" || country === "") return;

    setCategory(category);
    setCountry(country);
  };

  return (
    <div className="jumbotron mt-3 pb-5">
      <form onSubmit={handlerSubmit}>
        <div className="row">
          {/* <div className="col-sm-12 col-md-5 mt-1">
            <Select />
          </div>
          <div className="col-sm-12 col-md-5 mt-1">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div> */}
          <Select />
          <div className="col-sm-12 col-md-2 mt-1">
            <input
              type="submit"
              className="btn btn-secondary btn-block"
              value="Search.."
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
