import Link from "next/link";
import styles from "./Navbar.module.scss";
import GithubSVG from "common/components/SVG/GithubSVG";
import LinkedInSVG from "common/components/SVG/LinkedInSVG";
import { motion } from "framer-motion";

const Navbar = () => (
  <div className={styles.navbar} id="#navbar">
    <div className={styles.navbar__links}>
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
        className={styles.navbar__link_socials}
      >
        <Link href="https://github.com/Draxy-au">
          <a target="_blank">
            <GithubSVG />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/william-j-hamilton/">
          <a target="_blank">
            <LinkedInSVG />
          </a>
        </Link>
      </motion.div>
    </div>
  </div>
);

export default Navbar;
