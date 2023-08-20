import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StarFilled } from "@ant-design/icons";
import { Card, Label, Loading, Message } from "../../../components";
import { getPopularArtists } from "../slice";
import { Link, useNavigate } from "react-router-dom";
import rssIcon from "../../../assets/rss-icon.png";
import styles from "../styles.module.css";
import { setFilters } from "../../artists/slice";

function PopularArtists() {
  const {
    popularArtistsPending,
    popularArtistsFulfilled,
    popularArtistsRejected,
    popularArtists,
    popularArtistsErrorMessage,
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToPopularArtists = () => {
    dispatch(setFilters({ orderBy: "Popularity" }));
    navigate("/artists");
  };

  useEffect(() => {
    dispatch(getPopularArtists());
  }, [dispatch]);

  return (
    <div className={styles.popularArtistsBackground}>
      <div className={styles.popularArtistsContainer}>
        <div className={styles.popularArtistsHeader}>
          <div></div>
          <div className={styles.popularArtistsTextContainer}>
            <StarFilled className={styles.popularArtistsTextIcon} />
            <Label className={styles.popularArtistsText}>Popular Artists</Label>
          </div>
          <div className={styles.popularArtistsMoreContainer}>
            <img
              className={styles.popularArtistsMoreIcon}
              src={rssIcon}
              alt="rss-icon"
            />
            <div
              className={styles.popularArtistsMore}
              onClick={navigateToPopularArtists}
            >
              more featured...
            </div>
          </div>
        </div>
        <div className={styles.popularArtistsContentContainer}>
          {popularArtistsPending && <Loading />}
          {popularArtistsRejected && (
            <Message>{popularArtistsErrorMessage}</Message>
          )}
          {popularArtistsFulfilled && (
            <div className={styles.popularArtistsContent}>
              {popularArtists.map((artist) => (
                <div
                  key={artist._id}
                  className={styles.popularArtistsCardContainer}
                >
                  <Link to={`/artist/${artist._id}`}>
                    <Card
                      imageUrl={artist.image}
                      rating={artist.rating}
                      genres={artist.genres}
                      size="L"
                    />
                  </Link>
                  <Link
                    to={`/artist/${artist._id}`}
                    className={styles.popularArtistsCardLabelLink}
                  >
                    <Label className={styles.popularArtistsCardLabel}>
                      {artist.name}
                    </Label>
                  </Link>
                  <Label className={styles.labelSmall}>
                    {artist.foundationYear}
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

export default PopularArtists;
