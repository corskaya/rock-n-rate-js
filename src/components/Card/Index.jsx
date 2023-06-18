import Button from "../Button/Index";
import styles from "./styles.module.css";
import { StarFilled } from "@ant-design/icons";

function Card({ imageUrl, rating, genre, subGenres = [] }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt="card" />
        <div className={styles.overlay}>
          <div className={styles.ratingContainer}>
            <StarFilled className={styles.ratingIcon} />
            <div className={styles.rating}>{`${rating} / 10`}</div>
          </div>
          <div className={styles.genreContainer}>
            <div className={styles.genre}>{genre}</div>
            <div className={styles.genre}>{subGenres[0]}</div>
          </div>
          <Button className={styles.detailsBtn}>View Details</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;