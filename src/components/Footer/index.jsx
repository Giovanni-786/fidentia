import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

const iconsFooter = [
  {
    name: "Instagran",
    src: "/images/instagranIcon.svg",
    alt: "instagran do ícone",
    link: "https://www.instagram.com/fidentiaseguros/",
  },
  {
    name: "Facebook",
    src: "/images/facebookIcon.svg",
    alt: "facebook do ícone",
    link: "https://www.facebook.com/Fidentia-Insurance-Group-102406679286320",
  },
  {
    name: "Linkedin",
    src: "/images/linkedinIcon.svg",
    alt: "linkedin do ícone",
    link: "https://www.linkedin.com/company/fidentiainsurance/",
  },
];

export const Footer = ({pageRef, visibleState, section2, section5, section6, section7}) => {
  return (
    <footer className={styles.footer} id="footer" ref={pageRef}>
      <div
        className={`${styles.content} ${visibleState && styles.fade}`}
      >
        <div>
          <h2>A Fidentia</h2>
          <div className={styles.border}></div>
          <Link href="/insurance">
            Soluções
          </Link>
          <Link href="/fidentia" onClick={() => scrollTo(section6)}>
            A Fidentia
          </Link>
          <Link href="/#cotacao" onClick={() => scrollTo(section5)}>
            Cote agora
          </Link>
          <Link href="#artigos" onClick={() => scrollTo(section7)}>
            Artigos
          </Link>
        </div>

        <div>
          <h2>Contato</h2>
          <div className={styles.border}></div>
          <p>Rua Wanderley, 929</p>
          <p>Perdizes, São Paulo/SP,</p>
          <p>Brasil, 05011-011</p>
          <p>+55 11 3164 4031</p>
          <p>contato@fidentia.com.br</p>
        </div>

        <div>
          <h2>Redes sociais</h2>
          <div className={styles.border}></div>
          <div className={styles.iconsWrapper}>
            <div className={styles.iconsWrapper}>
              {iconsFooter.map((icon) => (
                <button
                  aria-label={icon.name}
                  aria-labelledby={icon.name}
                  key={icon.src}
                >
                  <Link href={icon.link} target="_blank">
                    <Image
                      src={icon.src}
                      width={45}
                      height={45}
                      alt={icon.alt}
                    />
                  </Link>
                </button>
              ))}
            </div>
            <figure className={styles.logoMobile}>
              <Link href="/" onClick={() => scrollTo(section1)}>
                <Image
                  src="/images/logo.svg"
                  width={45}
                  height={45}
                  alt="logo fidentia"
                />
              </Link>
            </figure>
          </div>
        </div>
        <div className={styles.copyrightWrapper}>
          <div>
            <span className={styles.copyContent}>
              Copyright @ 2023 Fidentia. Todos os direitos reservados.
            </span>
            <div className={styles.copyImageContent}>
              <div className={styles.copyContent}>
                <Link href={`politics/#email-mensagem`}>
                  Política de privacidade
                </Link>
                <Link href={`politics/#politica-privacidade`}>
                  Política de Cookies
                </Link>
                <Link href={`politics/#etica-compliance`}>
                  Ética e Compliance
                </Link>
              </div>
            </div>
          </div>
          <figure>
            <Link href="/#home" onClick={() => scrollTo(section1)}>
              <Image
                src="/images/logo.svg"
                width={85}
                height={85}
                alt="logo fidentia"
              />
            </Link>
          </figure>
        </div>
      </div>
    </footer>
  );
};
