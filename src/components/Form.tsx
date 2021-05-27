import React, { useEffect } from "react";
import styles from "./Form.module.css";
import useSelect from "./../hooks/useSelect";
import { Category } from "../models/news.model";

interface Props {
  setCategory(category: string): void;
}

const Form = ({ setCategory }: Props) => {
  const options: Category[] = [
    { label: "General", value: "general" },
    { label: "Business", value: "business" },
    { label: "Entertainment", value: "entertainment" },
    { label: "Health", value: "health" },
    { label: "Science", value: "science" },
    { label: "Sports", value: "sports" },
    { label: "Technology", value: "technology" },
  ];

  const [category, Select] = useSelect("general", options);

  //   useEffect(() => {
  //     setCategory(category);
  //   }, [category]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (category === "") return;

    setCategory(category);
  };

  return (
    <div className={`row ${styles.searcher}`}>
      <div className="col s12 m8 offset-m2">
        <form onSubmit={handlerSubmit}>
          <h2 className={styles.heading}>Find news by category</h2>
          <Select></Select>
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles["btn-block"]}`}
              value="Search.."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
