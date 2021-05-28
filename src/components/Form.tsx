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
    { label: "General", value: "general" },
    { label: "Business", value: "business" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Health", value: "health" },
    { label: "Science", value: "science" },
    { label: "Sports", value: "sports" },
    { label: "Technology", value: "technology" },
  ];
  const countries: Category[] = [
    { label: "Argentina", value: "ar" },
    { label: "Australia", value: "au" },
    { label: "Brazil", value: "br" },
    { label: "Belgium", value: "be" },
    { label: "Canada", value: "ca" },
    { label: "Colombia", value: "co" },
    { label: "China", value: "cn" },
    { label: "United States", value: "us" },
    { label: "France", value: "fr" },
    { label: "Italy", value: "it" },
    { label: "Japan", value: "jp" },
    { label: "Norway", value: "no" },
    { label: "New Zealand", value: "nz" },
    { label: "Portugal", value: "pt" },
    { label: "Mexico", value: "mx" },
  ];

  const [category, country, Select] = useSelect(
    "general",
    options,
    "mx",
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
