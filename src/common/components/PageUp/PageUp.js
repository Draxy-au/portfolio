import { motion, useAnimation } from "framer-motion";
import Link from "next/dist/client/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ChevronUpIcon from "../SVG/ChevronUpSVG";
import styles from './PageUp.module.scss'

function PageUp({link = '#'}) {
  const chevronVariants = {
    upInitial: {
      y: 100,
      opacity: 0,
    },
    upAnimate: {
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
      controls.start("upAnimate");
    }
    if (!inView) {
      controls.start("upInitial");
    }
    
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="upInitial"
      animate={controls}
      variants={chevronVariants}
      className={styles.chevronUp}
    >
      <Link href={link}>
        <a>
          <ChevronUpIcon />
        </a>
      </Link>
    </motion.div>
  );
}

export default PageUp;
