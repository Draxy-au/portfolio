import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import GithubSVG from "common/components/SVG/GithubSVG";
import LinkedInSVG from "common/components/SVG/LinkedInSVG";
import { motion } from "framer-motion";
import Menu from "../Menu";
import HamburgerSVG from "../SVG/HamburgerSVG";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className={styles.navbar} id="#navbar">
      <div className={styles.navbar__links}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.7,
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
      <div className={styles.navbar_menu}>
        {toggleMenu 
          ?<div onClick={()=>setToggleMenu(false)}><HamburgerSVG /></div>
          :<div onClick={()=>setToggleMenu(true)}><HamburgerSVG /></div>
        }
        {toggleMenu && (
          <div className={styles.menu_container}>
            
              <Menu setToggleMenu={setToggleMenu} />
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
