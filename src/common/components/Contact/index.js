import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FileDownloadSVG from "common/components/SVG/FileDownloadSVG";
import GithubSVG from "common/components/SVG/GithubSVG";
import LinkedInSVG from "common/components/SVG/LinkedInSVG";
import EmailSVG from "../SVG/EmailSVG";
import PageUp from "../PageUp/PageUp";
import Logo from "assets/images/logo--bear-165.png";
import styles from "./Contact.module.scss";

const Contact = () => {
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("");
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    setFormEmail("");
    setFormSubject("");
    setFormMessage("");
  };

  return (
    <>
      <a id="contact" style={{ display: "block", top: "-50" }}></a>
      <div className={styles.contact}>
        <PageUp link="#projects" />

        <div className={styles.contentwrap}>
          <div className={styles.title}>CONTACT ME</div>
          <div className={styles.content}>
            <form
              className={styles.contact_form}
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
              />
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                value={formSubject}
                onChange={(e) => setFormSubject(e.target.value)}
              />
              <textarea
                name="message"
                type="text"
                placeholder="Message"
                cols="50"
                rows="4"
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
              />
              <div className={styles.sendmsg}>
                <button type="submit">
                  <EmailSVG /> <p>Send</p>
                </button>
              </div>
            </form>
            <div className={styles.info}>
              <div className={styles.logo}>
                <Image src={Logo} />
              </div>
              <div className={styles.resume}>
                <button>
                  <FileDownloadSVG /> <p>Resume</p>
                </button>
              </div>
              <div className={styles.socials}>
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
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </div>
    </>
  );
};

export default Contact;
