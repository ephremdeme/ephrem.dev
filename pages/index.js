import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { NavBar } from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className={inter.className}>
            Site Under Contstruction! Coming Soon ...
          </h1>
        </div>
      </main>
    </>
  );
}
