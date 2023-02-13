import React from "react";
import { useRouter } from "next/router";

export default function article(props) {
  const router = useRouter();
  return (
    <div>
      <p class="text-center fs-2">{router.query.article}</p>
      <div class="text-center fs-5" style={{ width: "60%", margin: "auto" }}>
        {props.articleToShow.body}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.article;
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await data.json();
  const articleToShow = results.find((article) => article.title === slug);

  if (!articleToShow) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articleToShow,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await data.json();
  const paths = results.map((el) => ({ params: { article: el.title } }));

  return {
    paths,
    fallback: false,
  };
}
