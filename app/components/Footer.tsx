"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./Footer.module.css";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Wait for component to mount to access theme
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine if we're in dark mode
  const isDarkMode = mounted && theme === "dark";

  return (
    <footer
      className={`${styles.footer} ${isDarkMode ? styles.footer_dark : ""}`}
    >
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; 2025 CodeMamba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
