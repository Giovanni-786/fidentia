import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";

export default function CarrouselText({ arrayContent }) {
  const carouselRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1060) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(2);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <img src="/images/arrowLeft.png" className={styles.arrowIcon} alt="Ícone de seta para esquerda" /> : <img src="/images/arrowRight.png" className={styles.arrowIcon} alt="Ícone de seta para direita"/>
    return (
      <button onClick={onClick} disabled={isEdge} className={styles.button_pagination}>
        {pointer}
      </button>
    )
  }
  return (
      <Carousel
      renderArrow={myArrow}
      ref={carouselRef}
      itemsToShow={itemsPerPage}
      showArrows
      className={styles.container}
      showEmptySlots={false}
      enableAutoPlay
      autoPlaySpeed={5000}
    >
      {arrayContent.map((content) => (
        <div className={styles.deposition} key={content.name}>
          <div className={styles.title}>
            <h3>{content.title}</h3>
          </div>
          <div className={styles.info}>
            <article className={styles.text}>
              <p>{content.description ?? ""}</p>
              <p>{content.description1 ?? ""}</p>
              <p>{content.description2 ?? ""}</p>
              <p>{content.description3 ?? ""}</p>
              <p>{content.description4 ?? ""}</p>
            </article>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
