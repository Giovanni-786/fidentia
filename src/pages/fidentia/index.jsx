import styles from "./styles.module.scss";
import Link from "next/link";
import CarrouselText from "../../components/CarrouselText";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";

const servicesList = [
  {
    title: "Consultoria",
    description:
      "Consultoria é a alma de tudo que fazemos. Todos os nossos serviços foram concebidos de forma a prestar consultoria individualizada, garantindo aos nossos clientes e parceiros compreensão e gestão sobre seus riscos.",
  },
  {
    title: "Assessoria",
    description:
      "Prestamos assessoria completa em gestão de riscos e seguros para o segurado, intermediadores de seguros e resseguros e cias seguradoras e resseguradoras, nacionais ou internacionais.",
  },
  {
    title: "Subscrição",
    description:
      "Nossa especialidade. A subscrição de risco de pesquisas clínicas no Brasil e no mundo é a base técnica para todas as nossas soluções.",
  },
  {
    title: "Resseguro",
    description:
      "Oferecemos programas de resseguros, viabilizando a cobertura de seguro para qualquer tipo de pesquisa, em qualquer lugar do mundo.",
  },
  {
    title: "Research",
    description:
      "Realizamos continuamente pesquisas de mercado nos setores em que atuamos, fornecendo aos nossos clientes e parceiros dados confiáveis e precisos contribuindo em suas tomadas de decisão e atuação em seus setores.",
  },
  {
    title: "Educação",
    description:
      "Promovemos palestras, cursos, cursos in-company, estudos e artigos, além de gerarmos conteúdo oferecendo atualização contínua aos entusiastas de pesquisas clínicas.",
  },
  {
    title: "Nossa missão",
    description:
      "Cuidar de pessoas unindo o mercado segurador aos demais setores da economia, garantindo e apoiando o desenvolvimento socioeconômico através de soluções em seguros e perseguindo os mais elevados padrões de qualidade técnica, ética, transparência, clareza, honestidade, agilidade e empatia.",
  },
  {
    title: "Nossa visão",
    description:
      "Ser a melhor consultoria em seguros, veículo de conhecimento e hub de negócios para seus parceiros contribuindo continuamente para o desenvolvimento e o bem-estar da sociedade.",
  },
];

export default function fidentia() {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 630) {
      setMobileScreen(true);
    }
  }, []);
  return (
    <section>
      <section className={styles.section1}>

        <Link href="/">
          <figure>
            <img src="/images/logo.svg" alt="ir para a pagina inicial" />
          </figure>
        </Link>
        <div className={styles.contantWrapper}>
          <div>
            <h1>Somos a Fidentia.</h1>
            <div>
              <p>
                A Fidentia é um agente de seguros que oferece soluções globais
                para pesquisas clínicas.
              </p>
              <p>
                Fundada em 2017 com a missão de ser vetor entre os mercados de
                pesquisa clínica e segurador, oferecemos soluções em seguros
                para todos os interessados em desenvolver e apoiar pesquisas
                clinicas através de risk assessment, estruturação de programas
                de seguros e capacitação em gestão de riscos.
              </p>
              <span>Apoiando seu você, sempre.</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.contantWrapper}>
          <h2>Na Fidentia oferecemos uma suíte com serviços de:</h2>
          <CarrouselText arrayContent={servicesList} />
        </div>
      </section>

      <section className={styles.section3}>
        <div className={styles.contantWrapper}>
          <h2>Nossos valores</h2>
          <ul>
            <li>Ética</li>
            <li>Honestidade</li>
            <li>Clareza</li>
            <li>Transparência</li>
            <li>Capacidade Técnica</li>
            <li>Agilidade</li>
            <li>Empatia</li>
          </ul>
        </div>
      </section>
      <Footer/>
    </section>
  );
}
