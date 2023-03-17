import styles from "./styles.module.scss";
import Link from "next/link";
import InsuranceContent from "../../components/InsuranceContent";
import { Footer } from "../../components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

const contentSection1 = {
  id: "investigador",
  nextPage: "patrocinador",
  title: "Investigador principal",
  personImg: "/images/person_section1_fidentia.png",
  contents: [
    "Você está na fronte do desenvolvimento científico e é responsável, dentre muitas outras atribuições, por todo o projeto, pela segurança e bem-estar dos participantes de suas pesquisas clínica.",
    "O seguro é um instrumento chave para garantir um atendimento adequado aos participantes, prevenir interrupções ou cancelamentos de projeto e blindar seu patrimônio pessoal.",
  ],
  pathBackground: "/images/s1_insurance.png",
  pathBackgroundMobile: "/images/s10_insurance_mobile.png",
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos liderados por você",
      description2: "✓ Blinda seu relacionamento com seus patrocinadores",
      description3:
        "✓ Previne interrupções ou cancelamentos de seus projetos de pesquisa",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Protege falhas na execução dos ensaios clínicos, como desvios ao protocolo e falha no recrutamento;",
      description2:
        "✓ Segura danos causados ao participante e seu acompanhante no centro",
      description3:
        "✓ Custeia legais e honorários de advogados em processos litigiosos",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para você, investigador:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2:
        "✓ Seguro para qualquer tipo de pesquisa clínica, das menos até as mais invasivas e severas",
      description3:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
    },
    {
      name: "card4",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card5",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card6",
      title: "",
      description1:
        "✓ Indenizações por danos corporais e materiais ao participante associados à pesquisa clínica",
      description2:
        "✓ Indenizações por danos corporais e materiais ao participante por falhas profissionais",
      description3:
        "✓ Prejuízos financeiros ao patrocinador por falhas profissionais",
    },
    {
      name: "card7",
      title: "",
      description1: "✓ Gestão de imagem e quebra de propriedade intelectual",
      description2: "✓ Despesas legais e custas advocatícias",
      description3:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const contentSection2 = {
  id: "patrocinador",
  nextPage: "orpc",
  title: "Patrocinador",
  personImg: "/images/person_section2_fidentia.png",
  contents: [
    "Você é quem viabiliza as pesquisas clínicas e garante a oferta dos melhores tratamentos às pessoas, responsável pela segurança e bem-estar dos participantes de pesquisa clínica.",
    "Saiba que o seguro se faz um instrumento financeiro imprescindível, custeando a assistência médica necessária aos participantes de suas pesquisas, reduzindo as exposições financeiras de seus projetos e ampliando a previsibilidade dos resultados.",
  ],
  pathBackground: "/images/s2_insurance.png",
  pathBackgroundMobile: "/images/s20_insurance_mobile.png",
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos promovidos por você globalmente",
      description2: "✓ Blinda a imagem e reputação do patrocinador",
      description3: "✓ Reduz as exposições a risco de seus projetos",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1: "✓ Proporciona maior estabilidade financeira",
      description2: "✓ Auxilia nos resultados financeiros",
      description3:
        "✓ Custeia a assistência integral e imediata aos participantes",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para patrocinadores:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2: "✓ Auditoria de apólices existentes",
      description3: "✓ Gestão do programa de seguros para pesquisas clínicas",
    },
    {
      name: "card4",
      title: "",
      description1:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
      description2: "✓ Acesso a parceiros estratégicos locais",
      description3:
        "✓ Treinamento, palestras e cursos com foco em gestão de riscos",
    },
    {
      name: "card5",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card6",
      title: "Principais coberturas disponíveis para patrocinadores:",
      description1: "✓ Indenizações por danos associados à pesquisa clínica",
      description2: "✓ Desvios de protocolo e demais falhas profissionais",
      description3: "✓ Despesas médicas para assistência ao participante",
    },
    {
      name: "card7",
      title: "",
      description1: "✓ Despesas legais e custas advocatícias",
      description2: "✓ Crise de imagem",
      description3: "✓ Ataques cibernéticos",
      description4: "✓ Danos Genéticos para fetos e lactantes",
      description5:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const contentSection3 = {
  id: "orpc",
  nextPage: "centro",
  title: "ORPC",
  personImg: "/images/person_section3_fidentia.png",
  contents: [
    "Você é a ponte que permite o Brasil a acessar os tratamentos mais promissores em desenvolvimento globalmente.",
    "Saiba como o seguro apoia suas atividades, cobrindo todas as áreas de atuação da ORPC.",
  ],
  pathBackground: "/images/s3_insurance.png",
  pathBackgroundMobile: "/images/s30_insurance_mobile.png",
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos geridos pela ORPC",
      description2: "✓ Blinda o relacionamento com seus patrocinadores",
      description3:
        "✓ Amplia adequação de exigência de patrocinadores internacionais",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Protege prejuízos por erros ou falhas profissionais, tais como perda de prazos regulatórios ou redação e tradução de protocolos",
      description2:
        "✓ Previne interrupções ou cancelamentos de projetos de pesquisa clínica",
      description3: "",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para ORPCs:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2: "✓ Auditoria de apólices existentes",
      description3: "✓ Gestão do programa de seguros para pesquisas clínicas",
    },
    {
      name: "card4",
      title: "",
      description1:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
      description2: "✓ Acesso a parceiros estratégicos locais",
      description3:
        "✓ Treinamento, palestras e cursos com foco em gestão de riscos",
    },
    {
      name: "card5",
      title: "Principais coberturas disponíveis para ORPCs: ",
      description1: "✓ Indenizações por danos associados à pesquisa clínica",
      description2: "✓ Desvios de protocolo e demais falhas profissionais",
      description3: "✓ Despesas médicas para assistência ao participante",
    },
    {
      name: "card6",
      title: "",
      description1: "✓ Despesas legais e custas advocatícias",
      description2: "✓ Crise de imagem",
      description3: "✓ Ataques cibernéticos",
      description4: "✓ Danos Genéticos, para fetos e lactantes",
      description5:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const contentSection4 = {
  id: "centro",
  nextPage: "intermediadores",
  title: "Centros de Pesquisa",
  personImg: "/images/person_section4_fidentia.png",
  contents: [
    "Você é o elo entre o paciente e seus médicos. O meio para viabilizar o atendimento adequado ao paciente e garantir que os melhores e mais promissores tratamentos cheguem aos pacientes e participantes de pesquisa clínica.",
    "Descubra como o seguro auxiliará no atendimento ao seu paciente e participantes de pesquisas em seu centro além de como ele ampliará o relacionamento com os patrocinadores.   ",
  ],
  pathBackground: "/images/s40_insurance.png",
  pathBackgroundMobile: "/images/s40_insurance_mobile.png",
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Indeniza participantes e seus acompanhamentos por danos ocorridos dentro do centro",
      description2:
        "✓ Reduz a exposição financeira de cada projeto de pesquisa clínica",
      description3: "✓ Cobre lacunas nos MSAs e CTAs por falhas profissionais",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos realizados no centro",
      description2:
        "✓ Custeia a assistência integral e imediata ao participante",
      description3:
        "✓ Previne interrupções ou cancelamentos de projetos de pesquisa clínica",
    },
    {
      name: "card3",
      title: "As nossas principais soluções centros de pesquisa:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2: "✓ Auditoria de apólices existentes",
      description3: "✓ Gestão do programa de seguros para pesquisas clínicas",
    },
    {
      name: "card4",
      title: "",
      description1:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
      description2: "✓ Networking com industry-leaders e key opinion leaders",
      description3:
        "✓ Treinamento, palestras e cursos com foco em gestão de riscos",
    },
    {
      name: "card5",
      title: "Principais coberturas disponíveis para centros de pesquisa:",
      description1:
        "✓ Indenização por danos corporais e materiais por falhas profissionais – como desvio de protocolo e falha no recrutamento",
      description2:
        "✓ Indenização por danos corporais e materiais sofridos nas dependências do centro",
    },
    {
      name: "card6",
      title: "",
      description1:
        "✓ Indenização por danos associados ao objeto sob estudo ✓ Quebra de sigilo profissional",
      description2: "✓ Despesas legais e custas advocatícias",
      description3: "✓ Gestão de imagem",
      description4:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const contentSection5 = {
  id: "intermediadores",
  nextPage: "cias",
  title: "Intermediadores de seguros",
  personImg: "/images/person_section5_fidentia.png",
  contents: [
    "O setor de pesquisas clínicas está em constante expansão e o contrato de seguro é um instrumento que apoia seu crescimento de maneira sustentável.",
    "O Brasil já é uma potência em pesquisas clínicas no cenário global. Esse setor representa uma grande oportunidade de investimento para o profissional de seguro que deseja crescer e se estabelecer num segmento sólido.",
  ],
  pathBackground: "/images/s50_insurance.png",
  pathBackgroundMobile: "/images/s50_insurance_mobile.png",
  contentCarousel: [
    {
      name: "card1",
      title: "Saiba o que esse segmento te proporcionará:",
      description1:
        "✓ Sólida carteira de clientes com compras recorrentes e de grandes importâncias",
      description2: "✓ Ampliação dos resultados financeiros da corretora",
      description3: "✓ Oportunidades de expansão de negócios para o exterior",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Acesso ao maior mercado do setor da américa e 7º maior do mundo",
      description2:
        "✓ Excelentes oportunidades de expansão com cross e upsellings",
      description3: "",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para intermediadores de seguros:",
      description1:
        "✓ Know-how e papelaria white lable para vender com qualidade internacional desde o primeiro dia",
      description2: "✓ Acesso a leads e prospects locais e internacionais",
      description3:
        "✓ Consultoria e todo assessoramento e apoio para fechamento de negócios, desde o primeiro contato com o cliente",
    },
    {
      name: "card4",
      title: "",
      description1:
        "✓ Treinamento, palestras e cursos com foco em gestão de riscos",
      description2:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description3: "✓ Auditoria de apólices existentes",
      description4:
        "✓ Treinamento, palestras e cursos com foco no setor de pesquisas clínicas",
    },
    {
      name: "card5",
      title: "Principais coberturas disponíveis para você vencer, corretor:",
      description1: "✓ Responsabilidade Civil – Testes Clínicos",
      description2: "✓ Responsabilidade Civil – Profissional (E&O)",
      description3: "✓ Programas de seguro de vida",
    },
    {
      name: "card6",
      title: "",
      description1: "✓ Programas de seguro de saúde",
      description2: "✓ Seguro de riscos de propriedade",
      description3: "✓ Programas de transporte",
    },
  ],
};
const contentSection6 = {
  id: "cias",
  nextPage: "footer",
  title: "Cias Seguradoras & Resseguradoras",
  personImg: "/images/person_section6_fidentia.png",
  contents: [
    "A Fidentia é o maior player do setor do mercado segurador brasileiro de pesquisas clínicas. Conte com a nossa expertise em análise de risco e underwriting para ampliar os resultados da carteira de Responsabilidade Civil.",
  ],
  pathBackground: "/images/s60_insurance.png",
  pathBackgroundMobile: "/images/s60_insurance_mobile.png",
  contentCarousel: [
    {
      name: "card1",
      title: "Saiba o que a Fidentia te proporcionará:",
      description1:
        "✓ Sólida carteira de clientes com compras recorrentes e de grandes importâncias",
      description2: "✓ Ampliação dos undewriting results da carteira de RC",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Acesso a leads e prospects locais e internacionais",
      description2:
        "",
      description3: "",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para cias seguradoras e resseguradoras:",
      description1:
        "✓ Confecção e revisão de insurance wording",
      description2: "✓ Underwriting especicializada à prática de pesquisas clínicas com full underwriting report, conta-a-conta",
      description3:
        "✓ Full underwriting reports com rationale e pricing tool",
    },
    {
      name: "card4",
      title: "",
      description1:
        "✓ Paperwork whitelable completa, conta-a-conta",
      description2:
        "✓ Ambiente de cotação e contratação online via APIs plug-and-play",
      description3: "✓ Reports mensais com prestação de contas e resultados de carteira",
      description4:
        "",
    },
    {
      name: "card5",
      title: "Produtos disponíveis para seguradoras e resseguradoras:",
      description1: "✓ Responsabilidade Civil – Testes Clínicos",
      description2: "✓ Responsabilidade Civil – Profissional (E&O)",
      description3: "✓ Seguro de vida em grupo",
    },
    {
      name: "card6",
      title: "",
      description1: "✓ Seguro saúde",
      description2: "✓ Property",
      description3: "✓ Marine",
    },
  ],
};

const sections = [
  contentSection1,
  contentSection2,
  contentSection3,
  contentSection4,
  contentSection5,
  contentSection6,
];

const mainTitle = "Como nossas soluções apoiam você";

export default function insurance() {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
      if (window.innerWidth < 630) {
        setMobileScreen(true);
      }
    }, []);

  return (
    <section className={styles.main}>
      {sections.map((section) => (
        <section className={styles.container} key={section.title} id={section.id}>
          <Image
            src={ mobileScreen ? section.pathBackgroundMobile : section.pathBackground}
            fill={true}
            priority={true}
            alt="Imagem de fundo para ilustração"
            className={styles.background_image}
          />
          <div className={styles.header} key={section.title}>
            <div>
              <h2>{mainTitle}</h2>
            </div>
            <Link href="/">
              <figure>
                <img src="/images/logo.svg" alt="ir para a pagina inicial" />
              </figure>
            </Link>
          </div>
          <section className={styles.container_content}>
            <InsuranceContent content={section} />
          </section>
        </section>
      ))}
      <Footer id="footer"/>
    </section>
  );
}
