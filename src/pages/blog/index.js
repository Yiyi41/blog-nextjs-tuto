import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function blog(props) {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.cardsContainer}>
          {props.results.map((article) => (
            <div
              class="card"
              style={{ width: "25rem", flex: "40%", marginTop: "20px" }}
            >
              <div class="card-body" key={article.id}>
                <h5 class="card-title">{article.title}</h5>
                <p class="card-text">{article.body.slice(0, 20) + " ..."}</p>
                <Link href={`/blog/${article.title}`}>Lire cet article</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await data.json();
  // console.log(results)
  return {
    props: {
      results,
    },
  };
}
