import Button from "../Button/Index";
import styles from "./styles.module.css";
import { StarFilled } from "@ant-design/icons";

function Card({ imageUrl, rating, genre, subGenres = [] }) {
  const shortenLabel = (label) => {
    return label.length > 12 ? `${label.substring(0, 11)}...` : label;
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={imageUrl} alt="card" />
        <div className={styles.overlay}>
          <div className={styles.ratingContainer}>
            <StarFilled className={styles.ratingIcon} />
            <div className={styles.rating}>{`${
              rating !== 0 ? rating : "?"
            } / 10`}</div>
          </div>
          <div className={styles.genreContainer}>
            <div className={styles.genre}>{shortenLabel(genre)}</div>
            <div className={styles.genre}>{shortenLabel(subGenres[0])}</div>
          </div>
          <Button className={styles.detailsBtn}>View Details</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
