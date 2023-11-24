import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getArtist, getSimilarArtists } from "./slice";
import Visuals from "./components/Visuals";
import Info from "./components/Info";
import Suggestions from "./components/Suggestions";
import MobileMainInfo from "./components/MobileMainInfo";
import MobileAbout from "./components/MobileAbout";
import { Loading, Message } from "../../components";

function Artist() {
  const { id } = useParams();
  const { artistPending, artistRejected, artistFulfilled, artistErrorMessage } =
    useSelector((state) => state.artist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArtist(id));
    dispatch(getSimilarArtists(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {artistPending && <Loading size="L" />}
      {artistFulfilled && (
        <>
          <MobileMainInfo />
          <div className={styles.artistWebContainer}>
            <Visuals />
            <Info />
            <Suggestions />
          </div>
          <MobileAbout />
        </>
      )}
      {artistRejected && <Message>{artistErrorMessage}</Message>}
    </div>
  );
}

export default Artist;
