import { getPrismicClient } from "../../services/prismic";
import * as prismic from '@prismicio/client'
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from "./styles.module.scss";
import Image from "next/image";

export default function post({post}){
    return(
        <section className={styles.container}>
                {/* <Image                 
                    src={"/images/section_articles.png"}
                    fill={true}
                    alt="Imagem ilustrativa para artigo"
                /> */}
                <section className={styles.post}>
                    <h2>Artigos</h2>
                    <article className={styles.content}>
                        <div className={styles.title}>
                            <h1>{post?.data?.title}</h1>
                        </div>
                        <figure className={styles.banner}>
                            <Image 
                            
                                src={post.data.banner.url}
                                width={1200}
                                height={300}
                                priority={true}
                                alt="Imagem ilustrativa para artigo"
                            />
                        </figure>
                        
                        <section className={styles.container_post}>
                            {post.data.content.map((content,index) =>{
                                return(
                                    <section key={index} className={styles.post_content}>
                                        <h2>{content.heading}</h2>  
                                        {content.body.map((body, index) => {
                                                return (
                                                    <div key={index} className={styles.container_body_text}>
                                                        <p>{body.text}</p>
                                                    </div>  
                                                )   
                                            }) 
                                        }
                                        
                                    </section>
                                )
                            })}
                        </section>

                                
                            
                        
                    </article>
                </section>
        </section>
    )
}


export const getStaticPaths = async () => {
    const client = getPrismicClient();
  
    const posts = await client.get(
      [prismic.predicate.at('document.type', 'posts')],
      { pageSize: 3 }
    );
  
    const paths = posts.results.map(result => {
      return {
        params: {
          slug: result.uid,
        },
      };
    });
  
    return {
      paths,
      fallback: true,
    };
  };
  

export const getStaticProps = async({ params }) => {
    const { slug } = params;
    
    const client = getPrismicClient();
  
    const response = await client.getByUID('posts', slug, {});
  
    const post = {
      slug,
      first_publication: format(new Date(response.first_publication_date), "dd MMM yyyy", {
        locale: ptBR
      }),
      ...response
    }
    
    return {
      props: {
          post
      },
      revalidate: 60 * 30, // 30 minutes
  }
  
  };