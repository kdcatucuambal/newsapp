import React, { useState } from "react";
import { Category } from "../models/news.model";

const useSelect = (init: string, options: Category[]) => {
  const [category, setCategory] = useState(init);
  const Select = () => (
    <select
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
      }}
      value={category}
      className="browser-default"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
  const response: [string, () => JSX.Element] = [category, Select];
  return response;
};

export default useSelect;
