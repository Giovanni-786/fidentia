import styles from "./styles.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";

const depoiments = [
  {
    name: "Rafael Abad",
    subtitle: "CFO na KNW Brokers",
    photo: "/images/man.jpeg",
    alt: "Rafael Abad, CFO na KNW Brokers",
    depoiment:
      '"Sou fã do trabalho da Fidentia, Felipe e equipe. Gostaria de salientar a importância da Fidentia e equipe não ficarem "somente" no mundo do seguro, e sim se preocuparem entender e estar ao lado do cliente final, investindo anos e anos de seu tempo e expertise em desenvolver um mercado tão importante e nobre quanto o de Testes Clinicos, utilizando o seguro como meio de fomentar a indústria como um todo.”',
  },
  {
    name: "Sofia Banuls Scatena",
    subtitle: "CCO na Sanyuu",
    photo: "/images/woman.jpeg",
    alt: "Foto de perfil Sofia Banuls Scatena",
    depoiment:
      '"A Fidentia é uma empresa com grande reconhecimento no mercado de clinical trial e através do Diretor Felipe, a Sanyuu pôde ter o privilégio de galgar uma comparticipação. Isso possibilitou que pudéssemos ter mais conhecimento sobre as capacitações do Felipe e a responsabilidade e dedicação que ele tem junto a Fidentia/HDI para com os seus clientes e parceiros. Com isso, fica muito claro o quão sólido e valoroso é o trabalho feito por eles."',
  },
  {
    name: "Walter Polido",
    subtitle: "Polido e Carvalho Consultoria em Seguros e Resseguros Ltda",
    photo: "/images/walter.jpeg",
    alt: "Walter Polido",
    depoiment:
      '"Tive a grata satisfação profissional de elaborar condições contratuais de "clinical trials", com padrão internacional, para a Fidentia, sendo que o mercado de seguros brasileiro pode oferecer garantia extremamente eficaz para esse segmento. Considerando-se que o Brasil é um grande polo de experimentos clínicos no mundo, carecia da oferta de produto securitário de primeira linha. Parabenizo a Fidentia pela iniciativa de buscar o "good local standard" para o setor, de modo a atender plenamente os consumidores interessados."',
  },
  {
    name: "Glauco Fregonese",
    subtitle: "CEO na HPC Seguros",
    photo: "/images/glaucoFregonese.jpeg",
    alt: "Glauco Fregonese",
    depoiment:
      '"É um grande prazer trabalhar junto a Fidentia. A HPC Seguros Pesquisas Clínicas têm se dedicado ao segmento de pesquisas clínicas desde 2006 e ver uma empresa com a mesma dedicação e buscando sempre as melhores proteções para as empresas e pessoas ligadas à pesquisa é uma alegria e satisfação que temos com poucos parceiros.”',
  },
  {
    name: "Paula Yoshimoto",
    subtitle: "Executiva na TRR Seguros",
    photo: "/images/paula.jpeg",
    alt: "Paula Yoshimoto",
    depoiment:
      "“Não tenho o que reclamar da Fidentia, atendimento excelente! Sempre nos ajudando quando precisamos de auxílio para colocações de riscos de Clinical Trials. Tem sido um grande parceiro.”",
  },
];

export default function CarrouselDepoiments() {
  const carouselRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 820) {
        setItemsPerPage(1);
      }else {
        setItemsPerPage(2);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 3 },
    { width: 1800, itemsToShow: 3 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img
          src="/images/arrowLeft.png"
          className={styles.arrowIcon}
          alt="Ícone de seta para esquerda"
        />
      ) : (
        <img
          src="/images/arrowRight.png"
          className={styles.arrowIcon}
          alt="Ícone de seta para direita"
        />
      );
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={styles.button_pagination}
      >
        {pointer}
      </button>
    );
  };
  return (
    <Carousel
      ref={carouselRef}
      itemsToShow={itemsPerPage}
      breakPoints={breakPoints}
      renderArrow={myArrow}
      className={styles.container}
      enableAutoPlay
      autoPlaySpeed={5000}
    >
      {depoiments.map((depoiment) => (
        <div className={styles.deposition} key={depoiment.name}>
          <div className={styles.photo}>
            <Image
              src={depoiment.photo}
              width={158}
              height={158}
              alt={depoiment.alt}
            />
          </div>
          <div className={styles.info}>
            <h3>{depoiment.name}</h3>
            <p>{depoiment.subtitle}</p>
          </div>
          <article className={styles.text}>
            <p>{depoiment.depoiment}</p>
          </article>
        </div>
      ))}
    </Carousel>
  );
}
