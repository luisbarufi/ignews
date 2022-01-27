import Head from 'next/head';
import styles from './styles.module.scss';

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
