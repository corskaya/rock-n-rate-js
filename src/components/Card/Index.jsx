import Button from "../Button/Index";
import styles from "./styles.module.css";
import { StarFilled } from "@ant-design/icons";

function Card({
  className,
  imageUrl,
  rating,
  genres = [],
  shape = "Rectangle",
  size = "M",
}) {
  const labelLimit = shape === "Rectangle" ? 12 : 14;
  const shortenLabel = (label = "") => {
    return label.length > labelLimit
      ? `${label.substring(0, labelLimit - 1)}...`
      : label;
  };

  return (
    <div
      className={`${styles.cardContainer} ${
        shape === "Square" && styles.square
      } ${size === "L" && styles.large} ${className}`}
    >
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
            <div className={styles.genre}>{shortenLabel(genres[0])}</div>
            {shape === "Rectangle" && (
              <div className={styles.genre}>{shortenLabel(genres[1])}</div>
            )}
          </div>
          <Button className={styles.detailsBtn}>View Details</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
