import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Card, Label, Loading, Message } from "../../../components";
import { getPopularAlbums } from "../slice";
import moment from "moment/moment";
import styles from "../styles.module.css";
import { setFilters } from "../../albums/slice";

function PopularAlbums() {
  const {
    popularAlbumsPending,
    popularAlbumsFulfilled,
    popularAlbumsRejected,
    popularAlbums,
    popularAlbumsErrorMessage,
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToPopularAlbums = () => {
    dispatch(setFilters({ orderBy: "Popularity" }));
    navigate("/albums");
  };

  useEffect(() => {
    dispatch(getPopularAlbums());
  }, [dispatch]);

  return (
    <div className={styles.popularAlbumsBackground}>
      <div className={styles.popularAlbumsContainer}>
        <div className={styles.popularAlbumsHeader}>
          <Label className={styles.popularAlbumsText}>Popular Albums</Label>
          <span
            className={styles.popularAlbumsBrowseAll}
            onClick={navigateToPopularAlbums}
          >
            Browse All
          </span>
        </div>
        <div className={styles.popularAlbumsContentContainer}>
          {popularAlbumsPending && <Loading />}
          {popularAlbumsRejected && (
            <Message>{popularAlbumsErrorMessage}</Message>
          )}
          {popularAlbumsFulfilled && (
            <div className={styles.popularAlbumsContent}>
              {popularAlbums.map((album) => (
                <div
                  key={album._id}
                  className={styles.popularAlbumsCardContainer}
                >
                  <Link to={`/album/${album._id}`}>
                    <Card
                      className={styles.albumCard}
                      imageUrl={album.image}
                      rating={album.rating}
                      genres={album.genres}
                      shape="Square"
                    />
                    <div className={styles.mobileAlbumCardContainer}>
                      <img
                        src={album.image}
                        alt={album.name}
                        className={styles.mobileAlbumCard}
                      />
                    </div>
                  </Link>
                  <Link
                    to={`/album/${album._id}`}
                    className={styles.popularAlbumsCardLabelLink}
                  >
                    <Label className={styles.popularAlbumsCardLabel}>
                      {album.name}
                    </Label>
                  </Link>
                  <Label className={styles.labelSmall}>
                    {moment(album.releaseDate).year()}
                  </Label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularAlbums;
