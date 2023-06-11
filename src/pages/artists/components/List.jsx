import { Card, Label } from "../../../components";
import styles from "../styles.module.css";

function List({ artists }) {
  return (
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
          <Label className={styles.labelSmall}>{artist.foundationYear}</Label>
        </div>
      ))}
    </div>
  );
}

export default List;
