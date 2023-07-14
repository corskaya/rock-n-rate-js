import { StarFilled, StarOutlined } from "@ant-design/icons";
import styles from "../styles.module.css";
import { useEffect, useState } from "react";

function RateModal({ show, onClose, artist }) {
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [hoveredPoint, setHoveredPoint] = useState(0);
  const [selectedPoint, setSelectedPoint] = useState(0);

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
    return () => {
      setSelectedPoint(0);
      setHoveredPoint(0);
    };
  }, []);

  return (
    show && (
      <div className={styles.rateModalContainer}>
        <div onClick={onClose} className={styles.rateModalOverlay}></div>
        <div className={styles.rateModalContent}>
          <div className={styles.rateModalBodyContainer}>
            <div className={styles.rateModalBody}>
              <div>
                <StarFilled className={styles.rateModalRatingIcon} />
                <h3 className={styles.rateModalRatingText}>
                  {selectedPoint || "?"}
                </h3>
              </div>
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
        </div>
      </div>
    )
  );
}

export default RateModal;
