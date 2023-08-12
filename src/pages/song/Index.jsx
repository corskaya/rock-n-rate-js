import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getSong, getSimilarSongs } from "./slice";
import Visuals from "./components/Visuals";
import Info from "./components/Info";
import Suggestions from "./components/Suggestions";
import { Loading, Message } from "../../components";

function Song() {
  const { id } = useParams();
  const { songPending, songRejected, songFulfilled, songErrorMessage } =
    useSelector((state) => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSong(id));
    dispatch(getSimilarSongs(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {songPending && <Loading size="L" />}
      {songFulfilled && (
        <div className={styles.songContainer}>
          <Visuals />
          <Info />
          <Suggestions />
        </div>
      )}
      {songRejected && <Message>{songErrorMessage}</Message>}
    </div>
  );
}

export default Song;
