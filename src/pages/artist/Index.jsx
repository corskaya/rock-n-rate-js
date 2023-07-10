import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getArtist, getSimilarArtists } from "./slice";
import Visuals from "./components/Visuals";
import Info from "./components/Info";
import Suggestions from "./components/Suggestions";

function Artist() {
  const { id } = useParams();
  const {
    // artistPending,
    // artistRejected,
    artistFulfilled,
    // artist,
    // errorMessage,
    // similarArtistsFulfilled,
    // similarArtists,
  } = useSelector((state) => state.artist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtist(id));
    dispatch(getSimilarArtists(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {artistFulfilled && (
        <div className={styles.artistContainer}>
          <Visuals />
          <Info />
          <Suggestions />
        </div>
      )}
    </div>
  );
}

export default Artist;
