import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

import { App } from './app-client';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <App></App>
    </main>
  );
}
