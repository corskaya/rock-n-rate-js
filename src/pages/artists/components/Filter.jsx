import { useState } from "react";
import { Button, Form, Input, Label, Select } from "../../../components";
import genres from "../../../constants/genres";
import subGenres from "../../../constants/subGenres";
import styles from "../styles.module.css";

function Filter() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <Form className={styles.formContainer}>
      <div>
        <Label className={styles.labelLarge}> Search Term: </Label>
      </div>
      <div className={styles.inputContainer}>
        <Input className={styles.input} />
        <Button className={styles.button}>Search</Button>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Genre:</Label>
          <Select
            options={Object.keys(genres).map((key) => genres[key])}
            onChange={handleChange}
          />
        </div>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Sub Genre:</Label>
          <Select options={subGenres[selectedGenre]} />
        </div>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Rating:</Label>
          <Select
            options={[
              "All",
              "9+",
              "8+",
              "7+",
              "6+",
              "5+",
              "4+",
              "3+",
              "2+",
              "1+",
            ]}
          />
        </div>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Year:</Label>
          <Select
            options={[
              "All",
              "2020-2023",
              "2010-2019",
              "2000-2009",
              "1990-1999",
              "1980-1989",
              "1970-1979",
              "1960-1969",
              "1950-1959",
              "1900-1949",
            ]}
          />
        </div>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Order By:</Label>
          <Select options={["Latest", "Oldest", "Rating", "Year"]} />
        </div>
      </div>
    </Form>
  );
}

export default Filter;
