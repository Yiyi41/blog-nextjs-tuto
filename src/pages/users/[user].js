import React from "react";
// import { useRouter } from "next/router";

export default function user(props) {
  //   const router = useRouter();

  return (
    <div
      // class="text-center fs-5"
      style={{
        textAlign: "center",
        width: "40%",
        margin: "50px auto",
        border: "solid lightGrey",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h2>{props.userToShow.name}</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Username: {props.userToShow.username}</li>
        <li class="list-group-item">Email: {props.userToShow.email}</li>
        <li class="list-group-item">Téléphone: {props.userToShow.phone}</li>
        <li class="list-group-item">Site Web: {props.userToShow.website}</li>
      </ul>
    </div>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.user;
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  const userToShow = users.find((user) => user.username === slug);

  if (!userToShow) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      userToShow,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  const paths = users.map((el) => ({ params: { user: el.username } }));

  return {
    paths,
    fallback: false,
  };
}
