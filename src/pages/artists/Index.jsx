import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Card,
  Form,
  Input,
  Label,
  Loading,
  Select,
} from "../../components";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getArtists } from "./slice";

function Artists() {
  const {
    artistsPending,
    artistsRejected,
    artistsFulfilled,
    artists,
    errorMessage,
  } = useSelector((state) => state.artists);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  return (
    <div className={styles.container}>
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
            <Select options={["All", "Rock", "Metal"]} />
          </div>
          <div className={styles.selectContainer}>
            <Label className={styles.labelSmall}>Sub Genre:</Label>
            <Select options={["All", "Rock", "Metal"]} />
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
      {artistsPending && (
        <div>
          <Loading />
        </div>
      )}
      {artistsFulfilled && (
        <div className={styles.cardsContainer}>
          {artists.map((artist) => (
            <div key={artist._id} className={styles.cardContainer}>
              <Card
                imageUrl={artist.image}
                rating={artist.rating}
                genre={artist.genre}
                subGenres={artist.subGenres}
              />
              <Label className={styles.cardLabel}>{artist.name}</Label>
              <Label className={styles.labelSmall}>
                {artist.foundationYear}
              </Label>
            </div>
          ))}
        </div>
      )}
      {artistsRejected && <div>{errorMessage}</div>}
    </div>
  );
}

export default Artists;
