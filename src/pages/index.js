import Head from 'next/head';
import Navbar from "common/components/Navbar";
import Home from "common/components/Home";
import Projects from "common/components/Projects";
import Contact from "common/components/Contact";
import Footer from "common/components/Footer";
import styles from 'app/styles/App.module.scss';

export default function App() {
  return (
    <div className={styles.container}>
      <Head>
        <title>William Hamilton - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
