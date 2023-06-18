import { useSelector } from "react-redux";
import { Loading, Message } from "../../components";
import styles from "./styles.module.css";
import Filter from "./components/Filter";
import List from "./components/List";

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
      {artistsPending && (
        <div>
          <Loading />
        </div>
      )}
      {artistsFulfilled && <List artists={artists} />}
      {artistsRejected && <Message>{errorMessage}</Message>}
    </div>
  );
}

export default Artists;
