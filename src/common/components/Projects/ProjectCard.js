import Image from "next/image";
import Link from 'next/link';
import { useRef } from "react";
import styles from "./ProjectCard.module.scss";
import Modal from "common/components/Modal";
import defaultProjectImage from "assets/images/projectImage.png";

export default function ProjectCard({
  name = "Project Name",
  tags = ['HTML5'],
  image = defaultProjectImage,
  demo = "http://www.google.com",
  git = "http://www.github.com",
  info = "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
}) {
  const ModalRef = useRef();

  const openModal = () => {
    ModalRef.current.open();
  };

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} />
      </div>
      <div className={styles.buttons_container}>
        <div className={styles.demo}>
          <Modal
            ref={ModalRef}
            name={name}
            tags={tags}
            image={image}
            demo={demo}
            git={git}
            info={info}
          />
          <button>
            <p><Link href={demo}><a target='_blank'>Demo</a></Link></p>
          </button>
        </div>
        <div className={styles.github}>
          <button>
            <p><Link href={git}><a target='_blank'>GitHub</a></Link></p>
          </button>
        </div>
        <div className={styles.info}>
          <button onClick={openModal}>
            <p>Info</p>
          </button>
        </div>
      </div>
    </div>
  );
}
