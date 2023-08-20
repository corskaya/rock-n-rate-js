import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Label, Loading, Message, SongCard } from "../../../components";
import { getPopularSongs } from "../slice";
import styles from "../styles.module.css";
import { setFilters } from "../../songs/slice";

function PopularSongs() {
  const {
    popularSongsPending,
    popularSongsFulfilled,
    popularSongsRejected,
    popularSongs,
    popularSongsErrorMessage,
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToPopularSongs = () => {
    dispatch(setFilters({ orderBy: "Popularity" }));
    navigate("/songs");
  };

  useEffect(() => {
    dispatch(getPopularSongs());
  }, [dispatch]);

  return (
    <div className={styles.popularSongsBackground}>
      <div className={styles.popularSongsContainer}>
        <div className={styles.popularSongsHeader}>
          <Label className={styles.popularSongsText}>Popular Songs</Label>
          <span
            className={styles.popularSongsBrowseAll}
            onClick={navigateToPopularSongs}
          >
            Browse All
          </span>
        </div>
        <div className={styles.popularSongsContentContainer}>
          {popularSongsPending && <Loading />}
          {popularSongsRejected && (
            <Message>{popularSongsErrorMessage}</Message>
          )}
          {popularSongsFulfilled && (
            <div className={styles.popularSongsContent}>
              {popularSongs.map((song) => (
                <div
                  key={song._id}
                  className={styles.popularSongsCardContainer}
                >
                  <Link
                    to={`/song/${song._id}`}
                    className={styles.popularSongsCardLink}
                  >
                    <SongCard song={song} />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularSongs;
