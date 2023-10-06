import { useState, useEffect } from "react";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  CloseOutlined,
  InfoCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";

const initialToastStatus = {
  show: false,
  title: null,
  message: null,
  type: "success",
};

function Toast() {
  const [generalToastStatus, setGeneralToastStatus] =
    useState(initialToastStatus);
  const loginToastStatus = useSelector((state) => state.login.toastStatus);
  const registerToastStatus = useSelector(
    (state) => state.register.toastStatus
  );
  const homeToastStatus = useSelector((state) => state.home.toastStatus);
  const artistsToastStatus = useSelector((state) => state.artists.toastStatus);
  const artistToastStatus = useSelector((state) => state.artist.toastStatus);
  const albumsToastStatus = useSelector((state) => state.albums.toastStatus);
  const albumToastStatus = useSelector((state) => state.album.toastStatus);
  const songsToastStatus = useSelector((state) => state.songs.toastStatus);
  const songToastStatus = useSelector((state) => state.song.toastStatus);
  const dispatch = useDispatch();

  const delay = () => new Promise((res) => setTimeout(res, 5000));

  const closeToast = () => {
    setGeneralToastStatus(initialToastStatus);
  };

  // login
  useEffect(() => {
    if (loginToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(loginToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [loginToastStatus, dispatch]);

  // register
  useEffect(() => {
    if (registerToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(registerToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [registerToastStatus, dispatch]);

  // home
  useEffect(() => {
    if (homeToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(homeToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [homeToastStatus, dispatch]);

  // artists
  useEffect(() => {
    if (artistsToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(artistsToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [artistsToastStatus, dispatch]);

  // artist
  useEffect(() => {
    if (artistToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(artistToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [artistToastStatus, dispatch]);

  // albums
  useEffect(() => {
    if (albumsToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(albumsToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [albumsToastStatus, dispatch]);

  // album
  useEffect(() => {
    if (albumToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(albumToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [albumToastStatus, dispatch]);

  // songs
  useEffect(() => {
    if (songsToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(songsToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [songsToastStatus, dispatch]);

  // song
  useEffect(() => {
    if (songToastStatus.show) {
      const showToast = async () => {
        setGeneralToastStatus(songToastStatus);
        await delay();
        closeToast();
      };
      showToast();
    }
  }, [songToastStatus, dispatch]);

  const renderIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircleOutlined className={styles.icon} />;
      case "error":
        return <CloseCircleOutlined className={styles.icon} />;
      case "warning":
        return <WarningOutlined className={styles.icon} />;
      case "info":
        return <InfoCircleOutlined className={styles.icon} />;
      default:
        break;
    }
  };

  return (
    generalToastStatus.show && (
      <div className={`${styles.container} ${styles[generalToastStatus.type]}`}>
        {renderIcon(generalToastStatus.type)}
        <p className={styles.title}>{generalToastStatus.title}</p>
        <p className={styles.description}>{generalToastStatus.message}</p>
        <CloseOutlined className={styles.closeBtn} onClick={closeToast} />
      </div>
    )
  );
}

export default Toast;
