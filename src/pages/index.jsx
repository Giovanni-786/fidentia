import Header from "../components/Header";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/Home.module.scss';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useInView } from 'react-intersection-observer';
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

export default function Home({postsPagination}) {
  
  const [nextPage, setNextPage] = useState(postsPagination.next_page)
  const [posts, setPosts] = useState(postsPagination?.results);
  const { ref: postsRef, inView: postsVisible} = useInView();

  const handlePagination = () => {
    fetch(nextPage)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const formattedData = data.results.map(post => {
          return {
            uid: post.uid,
            first_publication_date: format(new Date(post.first_publication_date), "dd MMM, yyyy", {
              locale: ptBR
            }),
            data: {
              title: post.data.title
            },
          };
        });
        setPosts([...posts, ...formattedData]);
        setNextPage(data.next_page);
      })
  }

  return (
    <>

      {/* <Header /> */}
      <main className={styles.swiper_container}>
    
        <div className={styles.swiper_wrapper}>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          > 

          <SwiperSlide className={styles.swiper_slide}>
            <div className={`${styles.air_pods} ${styles.sections}`}>
                <div className={styles.section_container}>
                <div className={styles.image}>
                  <img src="/images/airpods-pro.png" alt="air pods" />
                </div>
                <div className={styles.text}>
                  <p className={styles.title}>Airpods</p>    
                  <p className={styles.description}>
                  AirPods will forever change the way you use headphones. Whenever you pull your AirPods out of the charging case, they instantly turn on and connect to your iPhone, Apple Watch, iPad, or Mac
                  </p>
                </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_slide}>
            <div className={`${styles.beats} ${styles.sections}`}>
                <div className={styles.section_container}>
                    <div className={styles.image}>
                      <img src="/images/blue.png" alt="beats" />
                    </div>
                    <div className={styles.text}>
                      <p className={styles.title}>Beats</p>
                      <p className={styles.description}>
                      Dre (Beats) is a leading audio brand founded in 2006 by Dr. Dre and Jimmy Iovine. Through its family of premium consumer headphones, earphones and speakers, Beats has introduced an entirely new generation to the possibilities of premium sound entertainment
                      </p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_slide}>
            <div className={`${styles.apple_watch} ${styles.sections}`}>
                <div className={styles.section_container}>
                    <div className={styles.image}>
                      <img src="/images/apple_watch_series_6_gps_44mm_blue_aluminum_deep_navy_sport_band_34r_print__usen.png" alt="beats" />
                    </div>
                    <div className={styles.text}>
                      <p className={styles.title}>Apple Watch 6 </p>
                      <p className={styles.description}>
                      Apple Watch Series 6 offers faster charging, completing a full charge in under 1.5 hours, and improved battery life for tracking certain workouts
                      </p>
                    </div>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiper_slide}>
            <div className={`${styles.galaxy_buds} ${styles.sections}`}>
                <div className={styles.section_container}>
                  <div className={styles.image}>
                    <img src="/images/samsung_galaxy_buds_pro_610x610.png" alt="beats" />
                  </div>
                  <div className={styles.text}>
                    <p className={styles.title}>SAMSUNG Galaxy Buds <span>PRO</span> </p>
                    <p className={styles.description}>
                    Galaxy Buds Pro offer the best call quality from our buds yet, so you can feel confident you're connected and heard, no matter where you are
                    </p>
                  </div>
                </div>
            </div>
          </SwiperSlide>
      </Swiper>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const client = getPrismicClient();
  
  const postsResponse = await client.get([
    prismic.predicate.at('document.type', 'posts')
  ], {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'asc'
    },
    fetchLinks: ['posts.title', 'posts.subtitle', 'posts.author'],
  });

  const posts = postsResponse.results.map(post => {
    return{
      uid: post.uid,
      first_publication_date: format(new Date(post.first_publication_date), "dd MM yyyy", {
        locale: ptBR
      }),
      data: {
        title: post.data.title
      },
      next_page: postsResponse.next_page  
    }
  })
  
  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts
  }
  
  return {
    props: {
      postsPagination
    },
    revalidate: 60 * 30,
  }
} 