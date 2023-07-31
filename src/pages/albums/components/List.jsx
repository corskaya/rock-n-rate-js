import { Link } from "react-router-dom";
import { Card, Label } from "../../../components";
import styles from "../styles.module.css";
import moment from "moment/moment";

function List({ albums }) {
  return (
    <div className={styles.cardsContainer}>
      {albums.map((album) => (
        <div key={album._id} className={styles.cardContainer}>
          <Link to={`/album/${album._id}`}>
            <Card
              imageUrl={album.image}
              rating={album.rating}
              genres={album.genres}
              shape="Square"
            />
          </Link>
          <Link to={`/album/${album._id}`} className={styles.cardLabelLink}>
            <Label className={styles.cardLabel}>{album.name}</Label>
          </Link>
          <Label className={styles.labelSmall}>
            {moment(album.releaseDate).year()}
          </Label>
        </div>
      ))}
    </div>
  );
}

export default List;
