import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; 2025 CodeMamba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
