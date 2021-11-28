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
        <meta property="og:title" content="William Hamilton Portfolio - Web Development" />
        <meta property="og:description"
          content="A web developer looking to make innovative, creative, and responsive web solutions." />
        <meta property="og:image" content="https://www.draxybearwd.com/og.png" />
        <meta property="og:image:alt" content="Portfolio" />
        <meta property="og:type" content="URL" />
        <meta property="og:url" content="https://www.draxybearwd.com/" />
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
