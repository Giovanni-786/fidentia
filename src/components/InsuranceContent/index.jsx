import styles from "./styles.module.scss";
import Link from "next/link";
import CarrouselText from "../CarrouselText";

export default function InsuranceContent({ content }) {
  return (
    <section className={styles.container}>
      <figure>
        <img src={content.personImg}></img>
      </figure>
      <section className={styles.content}>
        <article className={styles.title}>
          <div className={styles.title_main}>
            <h2>{content.title}</h2>
          </div>
          <div className={styles.content_title}>
            {content.contents.map((content) => (
              <p>{content}</p>
            ))}
          </div>
        </article>
        <div className={styles.subtitle}>
          <CarrouselText arrayContent={content.contentCarousel} />
        </div>
        <div className={styles.buttons}>
          <Link href="/#contato">
            <button className={styles.button}>Saiba mais</button>
          </Link>
            <Link href={`#${content.nextPage}`}>
          <div className={styles.downarrow}>
          </div>
            </Link>
        </div>
      </section>
    </section>
  );
}
