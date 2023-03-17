import Header from "../components/Header";
import * as prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import styles from "../styles/Home.module.scss";
import { format } from "date-fns";
import Link from "next/link";
import ptBR from "date-fns/locale/pt-BR";
import { useInView } from "react-intersection-observer";
import { use, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { ToastContainer, toast } from "react-toastify";

import Image from "next/image";
import Carrousel from "../components/Carrousel";
import CarrouselArticles from "../components/CarrouselArticles";
import CarrouselDepoimentes from "../components/CarrouselDepoiments";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { Footer } from "../components/Footer";

const politics = [{ uid: "politica-de-privacidade", title: "A" }];

export default function Home({ postsPagination }) {
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [posts, setPosts] = useState(postsPagination?.results);

  const [mobileWidth, setMobileWidth] = useState(false);
  const [countFinish, setCountFinish] = useState(false);
  const [loadingSubmitForm, setLoadingSubmitForm] = useState(false);

  const { ref: sectionOne, inView: sectionOneVisible } = useInView();
  const { ref: sectionTwo, inView: sectionTwoVisible } = useInView();
  const { ref: sectionThree, inView: sectionThreeVisible } = useInView();
  const { ref: sectionFour, inView: sectionFourVisible } = useInView();
  const { ref: sectionFive, inView: sectionFiveVisible } = useInView();
  const { ref: sectionSix, inView: sectionSixVisible } = useInView();
  const { ref: sectionSeven, inView: sectionSevenVisible } = useInView();
  const { ref: sectionEight, inView: sectionEightVisible } = useInView();
  const { ref: sectionFooter, inView: sectionFooterVisible } = useInView();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();

  const notifySuccess = () =>
    toast("Mensagem enviada com sucesso! Aguarde nosso contato.", {
      type: "success",
    });

  const notifyError = () =>
    toast("Ocorreu um erro inesperado ao realizar envio da mensagem.", {
      type: "error",
    });

  const notifyInfo = (nameInput) =>
    toast(`Campo *${nameInput}* é obrigatório`, {
      type: "info",
    });

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      if (!data.name) {
        notifyInfo("qual o seu nome?");
        return;
      }
      if (!data.phone) {
        notifyInfo("qual o seu telefone?");
        return;
      }
      if (!data.company) {
        notifyInfo("qual o nome da empresa?");
        return;
      }
      if (!data.subject) {
        notifyInfo("sobre o que quer falar?");
        return;
      }

      setLoadingSubmitForm(true);
      const res = await fetch(`api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status == 200) {
        setLoadingSubmitForm(false);
        notifySuccess();
      }
      const { error } = await res.json();
      if (error) {
        setLoadingSubmitForm(false);
        notifyError();
      }
    } catch (error) {
      setLoadingSubmitForm(false);
      notifyError();
    }
  };

  function scrollTo(section) {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const handlePagination = () => {
    if (nextPage) {
      fetch(nextPage)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const formattedData = data.results.map((post) => {
            return {
              key: post.uid,
              uid: post.uid,
              first_publication_date: format(
                new Date(post.first_publication_date),
                "dd MMM, yyyy",
                {
                  locale: ptBR,
                }
              ),
              data: {
                title: post.data.title,
              },
            };
          });
          setPosts([...posts, ...formattedData]);
          setNextPage(data.next_page);
        });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 630) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (sectionThreeVisible) {
      setCountFinish(true);
    }
  }, [sectionThreeVisible]);

  return (
    <>
      <Head>
        <title>Fidentia</title>
        <meta
          name="description"
          content="Soluções completas em seguros para pesquisas clínicas. Oferecemos uma suíte completa de soluções e serviços com tudo o que você precisa sobre seguro para o mundo das pesquisas clínicas."
        />
        <meta
          property="og:title"
          content="Fidentia soluções completas em seguros para pesquisas clínicas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fidentia.com.br/" />
        <meta
          property="og:description"
          content="Soluções completas em seguros para pesquisas clínicas. Oferecemos uma suíte completa de soluções e serviços com tudo o que você precisa sobre seguro para o mundo das pesquisas clínicas."
        />
        <meta property="og:site_name" content="Fidentia" />
      </Head>
      <main className={`container ${styles.container}`}>
        <section className={styles.section1} id="home" ref={section1}>
          <Image
            src={`${
              mobileWidth
                ? "/images/section1_mobile.png"
                : "/images/section1.png"
            }`}
            fill={true}
            priority={true}
            alt="Imagem ilustrativa de fundo para primeira seção"
          />
          <Header />
          <div className={`${styles.content} ${styles.fade}`} ref={sectionOne}>
            <div className={styles.contentWrapper}>
              <div className={styles.title}>
                <h2>
                  Apoiando você, <span>sempre</span>
                </h2>
              </div>

              <div className={styles.subtitle}>
                <p>Soluções completas em seguros para pesquisas clínicas</p>
                <p className={styles.subtitleSmall}>
                  Tudo que você precisa dominar seguros para o setor de
                  pesquisas clínicas.
                </p>
                <p className={styles.subtitleSmall}>
                  Destaque-se em ambientes competitivos, blindar seu negócio e
                  alavancar seu sucesso profissional.
                </p>
              </div>
            </div>

            <div className={styles.downarrow}>
              <button
                id="downArrow"
                aria-label="downArrow"
                aria-labelledby="downArrow"
                onClick={() => scrollTo(section2)}
              ></button>
            </div>
          </div>
        </section>

        <section className={styles.section2} id="solucoes" ref={section2}>
          <Image
            src={`${
              mobileWidth
                ? "/images/section2_mobile.png"
                : "/images/section2.png"
            }`}
            fill={true}
            priority={true}
            alt="Imagem ilustrativa de fundo para segunda seção"
          />
          <div
            className={`${styles.content} ${sectionTwoVisible && styles.fade}`}
            ref={sectionTwo}
          >
            <div className={styles.title}>
              <div>
                <h2>Conheça nossas soluções exclusivas</h2>
              </div>
              <p>
                Oferecemos uma suíte completa de soluções e serviços com tudo o
                que você precisa sobre seguro para o mundo das pesquisas
                clínicas.
              </p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div>
                  <h3>Seguros para</h3>
                  <p>Pesquisas Clínicas</p>
                  <p>Profissionais de saúde</p>
                  <p>Transporte de insumos</p>
                  <p>Seguro de vida para participantes</p>
                  <p>Soluções customizadas</p>
                </div>
                <div className={styles.button}>
                  <Link href="/#contato">
                    <button>Saiba mais</button>
                  </Link>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <h3>Cursos</h3>
                  <p>Seguro de pesquisas clínicas</p>
                  <p>Venda de seguros</p>
                  <p>Palestras</p>
                  <p>Cursos de curta duração</p>
                  <p>Cursos in-company</p>
                </div>
                <div className={styles.button}>
                  <Link href="/#contato">
                    <button>Saiba mais</button>
                  </Link>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <h3>Consultoria</h3>
                  <p>Corretores e brokers</p>
                  <p>Seguradoras e resseguradoras</p>
                  <p>Análise e gestão de riscos</p>
                  <p>Subscrição de riscos</p>
                  <p>Suporte técnico e comercial</p>
                </div>
                <div className={styles.button}>
                  <Link href="/#contato">
                    <button>Saiba mais</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section3} ref={section3} id="especialidades">
          <Image
            src={`${
              mobileWidth
                ? "/images/section3_mobile.png"
                : "/images/section3.png"
            }`}
            priority={true}
            fill={true}
            alt="Imagem ilustrativa de fundo para segunda seção"
          />
          <div
            className={`${styles.content} ${
              sectionThreeVisible && styles.fade
            }`}
            ref={sectionThree}
          >
            <div className={styles.title}>
              <h2>
                Porque somos especialistas em <br />
                seguros para pesquisas clínicas?
              </h2>
            </div>
            <div className={styles.numbers}>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={650000000} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>De capital segurado sob nossa gestão</p>
              </div>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={300000} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Participantes cobertos</p>
              </div>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={900} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Pesquisas clínicas seguradas</p>
              </div>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={200} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Novas apólices por ano</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section4} ref={section4} id="apoio">
          <div
            className={`${styles.content} ${sectionFourVisible && styles.fade}`}
            ref={sectionFour}
          >
            <div className={styles.title}>
              <h2>Como o seguro apoiará você?</h2>
            </div>
            <Carrousel />
          </div>
        </section>

        <section className={styles.section5} ref={section5} id="cotacao">
          <Image
            src={`${
              mobileWidth
                ? "/images/section5_mobile.png"
                : "/images/section5.png"
            }`}
            priority={true}
            fill={true}
            alt="Imagem ilustrativa de fundo para quinta seção"
          />
          <div
            className={`${styles.content} ${sectionFiveVisible && styles.fade}`}
            ref={sectionFive}
          >
            <div className={styles.title}>
              <h2>Faça sua cotação online conosco</h2>
            </div>
            <div className={styles.button}>
              <Link
                href="https://podio.com/webforms/28192878/2229964"
                target="_blank"
              >
                <button>Cote agora</button>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section6} ref={section6} id="depoimentos">
          <div
            className={`${styles.content} ${sectionSixVisible && styles.fade}`}
            ref={sectionSix}
          >
            <div className={styles.title}>
              <h2>
                Ajudar pessoas a desenvolver o seu melhor é o que nos move.
              </h2>

              <h2>Leia os depoimentos de alguns de nossos parceiros</h2>
            </div>
            <div className={styles.carrouselWrapper}>
              <CarrouselDepoimentes />
            </div>
          </div>
        </section>

        <section className={styles.section7} id="artigos" ref={section7}>
          <div
            className={`${styles.content} ${
              sectionSevenVisible && styles.fade
            }`}
            ref={sectionSeven}
          >
            <div className={styles.title}>
              <h2>Artigos</h2>
            </div>
            <CarrouselArticles posts={posts} nextPage={handlePagination} />
          </div>
        </section>

        <section className={styles.section8} id="contato">
          <div
            className={`${styles.content} ${
              sectionEightVisible && styles.fade
            }`}
            ref={sectionEight}
          >
            <div className={styles.title}>
              <h3>Vamos bater um papo?</h3>
              <p>
                Conte-nos mais sobre você e <br />
                como nós podemos ajudar.
              </p>
            </div>
            <div>
              <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className={styles.formsInputs}>
                    <div className={styles.inputContainer}>
                      <label>Qual o seu nome?</label>
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        {...register("name")}
                      />
                    </div>

                    <div className={styles.inputContainer}>
                      <label>Qual o seu telefone?</label>
                      <input
                        type="text"
                        placeholder="Digite seu telefone"
                        {...register("phone")}
                      />
                    </div>
                  </div>

                  <div className={styles.formsInputs}>
                    <div className={styles.inputContainer}>
                      <label>Qual o nome da empresa?</label>
                      <input
                        type="text"
                        placeholder="Digite o nome da empresa"
                        {...register("company")}
                      />
                    </div>

                    <div className={styles.inputContainer}>
                      <label>Qual o seu e-mail?</label>
                      <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        {...register("email")}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <label>Sobre o que quer falar</label>
                  <textarea
                    width="200"
                    height="300"
                    placeholder="Digite um assunto"
                    {...register("subject")}
                  ></textarea>
                </div>
                <div className={styles.container_submit_form}>
                  <button
                    type="submit"
                    disabled={loadingSubmitForm}
                    className={`${loadingSubmitForm ? styles.disabled : null}`}
                  >
                    Enviar mensagem
                  </button>
                </div>
                <ToastContainer autoClose={8000} />
              </form>
            </div>
          </div>
        </section>

        <Footer pageRef={sectionFooter} visibleState={sectionFooterVisible} section2 section5 section6 section7 />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = getPrismicClient();

  const postsResponse = await client.get(
    [prismic.predicate.at("document.type", "posts")],
    {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      fetchLinks: ["posts.title", "posts.subtitle", "posts.author"],
    }
  );

  const posts = postsResponse.results.map((post) => {
    return {
      key: post.uid,
      uid: post.uid,
      first_publication_date: format(
        new Date(post.first_publication_date),
        "dd MM yyyy",
        {
          locale: ptBR,
        }
      ),
      data: {
        title: post.data.title,
        banner: post.data.banner,
      },
      next_page: postsResponse.next_page,
    };
  });

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  return {
    props: {
      postsPagination,
    },
  };
}
