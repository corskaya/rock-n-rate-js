import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { getAlbum, getSimilarAlbums } from "./slice";
import Visuals from "./components/Visuals";
import Info from "./components/Info";
import Suggestions from "./components/Suggestions";
import MobileMainInfo from "./components/MobileMainInfo";
import MobileAbout from "./components/MobileAbout";
import { Loading, Message } from "../../components";

function Album() {
  const { id } = useParams();
  const { albumPending, albumRejected, albumFulfilled, albumErrorMessage } =
    useSelector((state) => state.album);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbum(id));
    dispatch(getSimilarAlbums(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      {albumPending && <Loading size="L" />}
      {albumFulfilled && (
        <>
          <MobileMainInfo />
          <div className={styles.albumWebContainer}>
            <Visuals />
            <Info />
            <Suggestions />
          </div>
          <MobileAbout />
        </>
      )}
      {albumRejected && <Message>{albumErrorMessage}</Message>}
    </div>
  );
}

export default Album;
