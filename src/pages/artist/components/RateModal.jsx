import { CloseOutlined, StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "../styles.module.css";
import { useEffect, useState } from "react";

function RateModal({ show, onClose, artist }) {
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [hoveredPoint, setHoveredPoint] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState(0);
  const [starSize, setStarSize] = useState(60);
  const [starTextSize, setStarTextSize] = useState(22);

  const handlePointHover = (point) => {
    setHoveredPoint(point);
  };

  const handlePointLeave = () => {
    if (selectedPoint > 0) {
      setHoveredPoint(selectedPoint);
      return;
    }
    setHoveredPoint(0);
  };

  const handleSelectPoint = (point) => {
    setSelectedPoint(point);
  };

  useEffect(() => {
    if (!show) {
      setSelectedPoint(0);
      setHoveredPoint(0);
    }
  }, [show]);

  useEffect(() => {
    setStarSize(90 + selectedPoint * 4);
    setStarTextSize(22 + selectedPoint * 1);
  }, [selectedPoint]);

  return (
    show && (
      <div className={styles.rateModalContainer}>
        <div onClick={onClose} className={styles.rateModalOverlay}></div>
        <div className={styles.rateModalContent}>
          <div className={styles.rateModalBodyContainer}>
            <div className={styles.rateModalBody}>
              {/* <div> */}
              <div className={styles.rateModalRatingIconContainer}>
                <StarFilled
                  className={styles.rateModalRatingIcon}
                  style={{ fontSize: starSize }}
                />
              </div>
              {/* </div> */}
              <h3 className={styles.rateModalRateThisText}>RATE THIS</h3>
              <h3 className={styles.rateModalArtistName}>{artist.name}</h3>
              <div className={styles.rateModalStarsContainer}>
                {points.map((point) => {
                  return point > hoveredPoint ? (
                    <StarOutlined
                      className={`${styles.rateModalStar} ${styles.rateModalStarPassive}`}
                      onMouseEnter={() => handlePointHover(point)}
                      onMouseLeave={handlePointLeave}
                      onClick={() => handleSelectPoint(point)}
                    />
                  ) : (
                    <StarFilled
                      className={`${styles.rateModalStar} ${styles.rateModalStarActive}`}
                      onMouseEnter={() => handlePointHover(point)}
                      onMouseLeave={handlePointLeave}
                      onClick={() => handleSelectPoint(point)}
                    />
                  );
                })}
              </div>

              <h3
                className={styles.rateModalRatingText}
                style={{ fontSize: starTextSize }}
              >
                {selectedPoint || "?"}
              </h3>
              <button
                className={`${styles.rateModalBtn} ${
                  selectedPoint > 0
                    ? styles.rateModalBtnActive
                    : styles.rateModalBtnPassive
                }`}
              >
                Rate
              </button>
            </div>
          </div>
          <div className={styles.rateModalCloseBtnContainer}>
            <div className={styles.rateModalCloseBtn} onClick={onClose}>
              <CloseOutlined className={styles.rateModalCloseIcon} />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default RateModal;
