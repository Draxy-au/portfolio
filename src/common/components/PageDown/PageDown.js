import { motion, useAnimation } from "framer-motion";
import Link from "next/dist/client/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ChevronDownIcon from "../SVG/ChevronDownSVG";
import styles from './PageDown.module.scss'

function PageDown({link = '#'}) {
  const chevronVariants = {
    downInitial: {
      y: -100,
      opacity: 0,
    },
    downAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("downAnimate");
    }
    if (!inView) {
      controls.start("downInitial");
    }
    
  }, [controls, inView]);

  return (
    <motion.div
        ref={ref}
        initial="downInitial"
        animate={controls}
        variants={chevronVariants}
        className={styles.chevronDown}
      >
        <Link href={link}>
          <a>
            <ChevronDownIcon />
          </a>
        </Link>
      </motion.div>
  );
}

export default PageDown;


