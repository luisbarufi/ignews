import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicCLient } from '../../services/prismic';
import * as prismic from '@prismicio/client'
import styles from './styles.module.scss';
import { Client } from 'faunadb';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>11 de Outubro de 2011</time>
            <strong>Vivamus suscipit tortor eget volutpat.</strong>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </a>

          <a href="#">
            <time>11 de Outubro de 2011</time>
            <strong>Vivamus suscipit tortor eget volutpat.</strong>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </a>

          <a href="#">
            <time>11 de Outubro de 2011</time>
            <strong>Vivamus suscipit tortor eget volutpat.</strong>
            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicCLient();

   const response = await client.get({
    predicates: prismic.predicates.at('document.type', 'publication'),
    fetch: ['publication.title', 'publication.content'],
    pageSize: 100
   })

   console.log(JSON.stringify(response, null, 2))

  return { 
    props: {}
  }
}
