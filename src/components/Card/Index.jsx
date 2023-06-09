import Button from "../Button/Index";
import styles from "./styles.module.css";
import { StarFilled } from "@ant-design/icons";

function Card({ imageUrl, rating, genre, subGenres = [] }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={
            imageUrl ??
            "https://img.yts.mx/assets/images/movies/taz_quest_for_burger_2023/medium-cover.jpg"
          }
          alt="card"
        />
        <div className={styles.overlay}>
          <div className={styles.ratingContainer}>
            <StarFilled className={styles.ratingIcon} />
            <div className={styles.rating}>{`${rating ?? "6.2"} / 10`}</div>
          </div>
          <div className={styles.genreContainer}>
            <div className={styles.genre}>{genre ?? "Adventure"}</div>
            <div className={styles.genre}>{subGenres[0] ?? "Animation"}</div>
          </div>
          <Button className={styles.detailsBtn}>View Details</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
