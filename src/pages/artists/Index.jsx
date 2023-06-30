import { useSelector } from "react-redux";
import { Loading, Message } from "../../components";
import styles from "./styles.module.css";
import Filter from "./components/Filter";
import List from "./components/List";
import Paginate from "./components/Paginate";

function Artists() {
  const {
    artistsPending,
    artistsRejected,
    artistsFulfilled,
    artists,
    errorMessage,
  } = useSelector((state) => state.artists);

  return (
    <div className={styles.container}>
      <Filter />
      <div className={styles.listContainer}>
        <h3 className={styles.listHeader}>Music Ratings Artists</h3>
        {artistsPending && (
          <div>
            <Loading />
          </div>
        )}
        {artistsFulfilled && <Paginate />}
        {artistsFulfilled && <List artists={artists} />}
        {artistsFulfilled && <Paginate />}
        {artistsRejected && <Message>{errorMessage}</Message>}
      </div>
    </div>
  );
}

export default Artists;
