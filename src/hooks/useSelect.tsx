import React, { Fragment, useState } from "react";
import { Category } from "../models/news.model";

const useSelect = (
  init: string,
  options: Category[],
  initC: string,
  countries: Category[]
) => {
  const [category, setCategory] = useState(init);
  const [country, setCountry] = useState(initC);
  const Select = () => (
    <Fragment>
      <div className="col-sm-12 col-md-5 mt-1">
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCategory(e.target.value);
          }}
          value={category}
          className="custom-select"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="col-sm-12 col-md-5 mt-1">
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setCountry(e.target.value);
          }}
          value={country}
          className="custom-select"
        >
          {countries.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </Fragment>
  );
  const response: [string, string, () => JSX.Element] = [
    category,
    country,
    Select,
  ];
  return response;
};

export default useSelect;
