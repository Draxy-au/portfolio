import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.scss";
import Logo from "assets/images/logo--bear-340.png";
import FileDownloadSVG from "common/components/SVG/FileDownloadSVG";
import ChevronDownIcon from "../SVG/ChevronDownSVG";
import { motion } from "framer-motion";
import PageDown from "../PageDown/PageDown";

const Home = () => (
  <div className={styles.home}>
    <div className={styles.content}>
      <motion.div 
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.7
        }}
        className={styles.logo}
      >
        <Image priority src={Logo} />
      </motion.div>
      <div className={styles.info}>
        <motion.div 
          initial={{
            x: 50,
            opacity: 0
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.3
          }}
          className={styles.name}
        >William Hamilton</motion.div>
        <motion.div 
          initial={{
            x: 50,
            opacity: 0
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            delay: 0.5
          }}
          className={styles.title}
        >Web Developer</motion.div>
        <motion.div 
            initial={{
              
              opacity: 0,
              x: 50
            }}
            animate={{
              
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 1
            }} className={styles.line}>
          <hr />
        </motion.div>
        <div className={styles.button_container}>
          <motion.div 
            initial={{
              scale: 0
              
            }}
            animate={{
              scale: 1
            }}
            transition={{
              delay: 1.3
            }}
            className={styles.projects}
          >
            <Link href="#projects">
              <button>
                <p>Projects</p>
              </button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{
              scale: 0
              
            }}
            animate={{
              scale: 1
            }}
            transition={{
              delay: 1.3
            }} className={styles.contact}>
            <Link href="#contact">
              <button>
                <p>Contact</p>
              </button>
            </Link>
          </motion.div>
          <motion.div 
            initial={{
              scale: 0
              
            }}
            animate={{
              scale: 1
            }}
            transition={{
              delay: 1.3
            }}
            className={styles.resume}>
            <button>
              <FileDownloadSVG /> <p>Resume</p>
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{
          y: -100,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          delay: 2
        }}
        className={styles.chevronDown}
      >
        <PageDown link='#projects' />
      </motion.div>
    </div>
  </div>
);

export default Home;
