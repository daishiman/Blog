import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyle from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>日々の気づきを投稿します</p>
      </section>

      <section>
        <h2>エンジニアブログ</h2>
        <div>
          <article>
            <Link href="/">
              <img src="/images/thumbnail01.jpg" alt="" />
            </Link>
            <Link href="/">
              <a>だいしのブログ</a>
            </Link>
            <br />
            <small>2022/05/03</small>
          </article>
        </div>
      </section>
    </Layout>
  );
}
