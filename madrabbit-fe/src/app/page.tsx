import styles from './page.module.css'
import Head from "next/head"
import type { NextPage } from "next"
import MadRabbit from '../../components/madrabbit'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MadRabbit AI wannabe.</title>
        <meta
        name="description"
        content="Give me AI words."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MadRabbit />
    </div>
  );
};

export default Home;