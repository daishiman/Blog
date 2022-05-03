import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyle from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <p>日々の気づきを投稿します</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>エンジニアブログ</h2>
        <div className={styles.grid}>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>だいしのブログ</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022/05/03</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>だいしのブログ</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022/05/03</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>だいしのブログ</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022/05/03</small>
          </article>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" className={styles.thumbnailImage} />
            </Link>
            <Link href="/">
              <a className={utilStyle.boldText}>だいしのブログ</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>2022/05/03</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
