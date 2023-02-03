import Header from "../components/Header";
import * as prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import styles from "../styles/Home.module.scss";
import { format } from "date-fns";
import Link from 'next/link';
import ptBR from "date-fns/locale/pt-BR";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import Image from "next/image";
import Carrousel from "../components/Carrousel";
import CarrouselArticles from "../components/CarrouselArticles";

const iconsFooter = [
  { src: "/images/instagranIcon.svg", alt: "instagran do ícone", link: "https://www.instagram.com/fidentiaseguros/" },
  { src: "/images/facebookIcon.svg", alt: "facebook do ícone", link: "https://www.facebook.com/Fidentia-Insurance-Group-102406679286320" },
  { src: "/images/linkedinIcon.svg", alt: "linkedin do ícone", link: "https://www.linkedin.com/company/fidentiainsurance/" },
];

export default function Home({ postsPagination }) {
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [posts, setPosts] = useState(postsPagination?.results);

  const [mobileWidth, setMobileWidth] = useState(false);

  const [countFinish, setCountFinish] = useState(false);

  const { ref: sectionOne, inView: sectionOneVisible } = useInView();
  const { ref: sectionTwo, inView: sectionTwoVisible } = useInView();
  const { ref: sectionTree, inView: sectionTreeVisible } = useInView();
  const { ref: sectionFour, inView: sectionFourVisible } = useInView();
  const { ref: sectionFive, inView: sectionFiveVisible } = useInView();
  const { ref: sectionSix, inView: sectionSixVisible } = useInView();
  const { ref: sectionSeven, inView: sectionSevenVisible } = useInView();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();

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
    if (sectionTreeVisible) {
      setCountFinish(true);
    }
  }, [sectionTreeVisible]);

  // useEffect(() =>{
  //   if(sectionOneVisible){
  //     window.history.pushState({}, '', `#home`);

  //   }
  //   if(sectionTwoVisible){
  //     window.history.pushState({}, '', `#solucoes`);
  //   }
  // }, [sectionOneVisible, sectionTwoVisible, sectionTreeVisible])

  return (
    <>
      <main className={`container ${styles.container}`}>
        <section className={styles.section1} id="home" ref={section1}>
          <Header />
          <Image
            src={`${
              mobileWidth
                ? "/images/section1_mobile.png"
                : "/images/section1.png"
            }`}
            fill={true}
            priority={true}
            alt="background image"
          />
          <div className={styles.content} ref={sectionOne}>
            <div className={styles.title}>
              <h2>
                Apoiando você, <span>sempre</span>
              </h2>
            </div>

            <div className={styles.subtitle}>
              <p>
                Soluções <br />
                completas em seguros para pesquisas clínicas
              </p>
            </div>

            <div className={styles.downarrow}>
              <button onClick={() => scrollTo(section2)}></button>
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
            alt="background image"
          />
          <div className={`${styles.content}`} ref={sectionTwo}>
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
                <h3>Seguros para</h3>
                <p>Pesquisas Clínicas</p>
                <p>Profissionais de pesquisas clínicas</p>
                <p>Transportes de materiais para o estabelecimento</p>
                <p>Seguro de vida para pacientes</p>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Cursos</h3>
                <p>Seguros para pesquisas clínicas</p>
                <p>Venda de seguros</p>
                <p>Palestras</p>
                <p>Cursos de curta duração</p>
                <p>Cursos in-company</p>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Consultoria</h3>
                <p>Para corretores, seguradoras e brokers</p>
                <p>Análise e gestão de riscos</p>
                <p>Subscroção de riscos</p>
                <p>Suporte técnico e comercial completo</p>
                <div className={styles.button}>
                  <button>Saiba mais</button>
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
          />
          <div className={styles.content} ref={sectionTree}>
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
                    sectionTreeVisible ? styles.count_animation : null
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
                    sectionTreeVisible ? styles.count_animation : null
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
                    sectionTreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={300} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Pesquisas seguradas ativas</p>
              </div>
              <div>
                <h2
                  className={`${
                    sectionTreeVisible ? styles.count_animation : null
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
          <div className={styles.content}>
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
          />
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Faça sua cotação online conosco</h2>
            </div>
            <div className={styles.button}>
              <button>Cote agora</button>
            </div>
          </div>
        </section>

        <section className={styles.section6} ref={section6} id="depoimentos">
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>
                Ajudar pessoas a desenvolver o seu melhor é o que nos move.
              </h2>

              <h2>Leia os depoimentos de alguns de nossos parceiros</h2>
            </div>

            <div className={styles.deposition}>
              <div className={styles.photo}>
                <Image
                  src={"/images/photo_profile.svg"}
                  width={168}
                  height={168}
                />
              </div>
              <div className={styles.info}>
                <h3>Dr. Augusto F. Rodrigues</h3>
                <p>Hospital Albert Einstein</p>
              </div>
              <article className={styles.text}>
                <p>
                  “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper.”
                </p>
              </article>
            </div>

            <div className={styles.deposition}>
              <div className={styles.photo}>
                <Image
                  src={"/images/photo_profile2.svg"}
                  width={168}
                  height={168}
                />
              </div>

              <div className={styles.info}>
                <h3>Brenda A. C. Real</h3>
                <p>Instituto Butantan</p>
              </div>
              <article className={styles.text}>
                <p>
                  “Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper.”
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section7} id="artigos" ref={section7}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Artigos</h2>
            </div>
            <CarrouselArticles posts={posts} nextPage={handlePagination} />
          </div>
        </section>

        <section className={styles.section8}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h3>Vamos bater um papo ?</h3>
              <p>
                Conte-nos mais sobre você e <br />
                como nós podemos auxiliá-lo
              </p>
            </div>
            <form className={styles.forms}>
              <div>
                <label>Qual o seu nome?</label>
                <input type="text" placeholder="Digite seu nome" />
              </div>

              <div>
                <label>Qual o nome da empresa?</label>
                <input type="text" placeholder="Digite o nome da empresa" />
              </div>

              <div>
                <label>Qual o seu telefone?</label>
                <input type="text" placeholder="Digite seu telefone" />
              </div>

              <div>
                <label>Qual o seu e-mail?</label>
                <input type="text" placeholder="Digite seu e-mail" />
              </div>
              <div>
                <label>Sobre o que quer falar</label>
                <textarea
                  width="200"
                  height="300"
                  placeholder="Digite um assunto"
                ></textarea>
              </div>
            </form>
            <div className={styles.container_submit_form}>
              <button>Enviar mensagem</button>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.content}>
            <div>
              <h2>A Fidentia</h2>
              <div className={styles.border}></div>
              <Link href="/#solucoes" onClick={() => scrollTo(section2)}>Soluções</Link>
              <Link href="/#fidentia" onClick={() => scrollTo(section6)}>A Fidentia</Link>
              <Link href="/#cotacao" onClick={() => scrollTo(section5)}>Cote agora</Link>
              <Link href="#artigos" onClick={() => scrollTo(section7)}>Artigos</Link>
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
                {iconsFooter.map((icon) => (
                  <button key={icon.src}>
                    <Link href={icon.link} target="_blank"><Image
                      src={icon.src}
                      width={45}
                      height={45}
                      alt={icon.alt}
                    /></Link>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.copyrightWrapper}>
            <div>
              <span className={styles.copyContent}>
                Copyright @ 2023 Fidentia. Todos os direitos reservados.
              </span>
              <div className={styles.copyImageContent}>
                <div className={styles.copyContent}> 
                  <span>Política de privacidade</span>
                  <span>Política de Cookies</span>
                  <span>Ética e Compliance</span>
                </div>
                <figure>
                <Link href="/#home" onClick={() => scrollTo(section1)}>
                    <Image
                      src="/images/logo.svg"
                      width={85}
                      height={85}
                      alt="logo"
                    />
                    </Link>
                  
                </figure>
              </div>
            </div>
          </div>
        </footer>
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
