import Image from "next/image";
import Link from "next/link";
import { useState, forwardRef, useImperativeHandle } from "react";
import ReactDom from "react-dom";
import WindowCloseSVG from "../SVG/WindowCloseSVG";
import Tag from "../Tag";
import styles from "./Modal.module.scss";
import { motion } from "framer-motion";
import GithubSVG from "../SVG/GithubSVG";
import DesktopIcon from "../SVG/DesktopSVG";

const Modal = forwardRef((props, ref) => {
  const { name, image, demo, git, info, tags } = props;
  const [modalDisplay, setModalDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setModalDisplay(true);
  };

  const close = () => {
    setModalDisplay(false);
  };
  if (modalDisplay) {
    return ReactDom.createPortal(
      <motion.div className={styles.modal_wrapper}>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className={styles.modal_backdrop}
          onClick={close}
        />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className={styles.modal_content}
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            className={styles.close}
            onClick={close}
          >
            <WindowCloseSVG />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 100,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
            }}
          >
            <motion.div className={styles.title}>{name}</motion.div>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className={styles.tags}
            >
              {tags?.map((tag, key) => (
                <Tag key={key} tagname={tag} />
              ))}
            </motion.div>
            <motion.div className={styles.content}>
              <motion.div className={styles.project_image}>
                <Image src={image} />
              </motion.div>
              <motion.div className={styles.info}>
                <motion.div className={styles.objective}>
                  <p>Objective</p>
                  <p>{info}</p>
                </motion.div>
                <motion.div className={styles.buttons_container}>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1,
                    }}
                    className={styles.demo}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div className={styles.icon}>
                        <DesktopIcon />
                      </motion.div>
                      <p>
                        <Link href={demo}>
                          <a target="_blank">Demo</a>
                        </Link>
                      </p>
                    </motion.button>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 1.2,
                    }}
                    className={styles.github}
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={styles.icon}>
                        <GithubSVG />
                      </div>
                      <p>
                        <Link href={git}>
                          <a target="_blank">GitHub</a>
                        </Link>
                      </p>
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>,
      document.getElementById("portal")
    );
  }
  return null;
});

export default Modal;
