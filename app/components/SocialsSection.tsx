import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./SocialsSection.module.css";

export default function SocialsSection() {
  return (
    <section id="socials" className={styles.socialsSection}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.socialIconWrapper}>
              <FaGithub className={styles.socialIcon} />
            </div>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.socialIconWrapper}>
              <FaLinkedin className={styles.socialIcon} />
            </div>
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <div className={styles.socialIconWrapper}>
              <FaXTwitter className={styles.socialIcon} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
