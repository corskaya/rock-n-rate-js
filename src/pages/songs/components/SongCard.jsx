import styles from "../styles.module.css";

function SongCard({ song }) {
  return (
    <div className={styles.songCardContainer}>
      <img className={styles.songCardImage} src={song.image} alt={song.name} />
      <div className={styles.songCardInfo}>
        <div className={styles.songCardName}>{song.name}</div>
        <div className={styles.songCardArtist}>{song.artistRefName}</div>
      </div>
    </div>
  );
}

export default SongCard;
