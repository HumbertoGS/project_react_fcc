import styles from "./page.module.css";

import { menu } from "./menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p></p>
        <div>
          <p>By Humberto G.</p>
        </div>
      </div>

      <div className={styles.center}>
        <h1>React Projects</h1>
        <h2>using Next.js</h2>
      </div>

      <div className={styles.grid}>
        {menu &&
          menu.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>
                  {item.tittle} <span>-&gt;</span>
                </h2>
                <p>{item.description}</p>
              </a>
            );
          })}
      </div>
    </main>
  );
}
