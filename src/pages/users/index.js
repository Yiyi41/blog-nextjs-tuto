import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function users(props) {
  return (
    <div className={styles.userContainer}>
      <h1> La liste des membres</h1>
      {props.users.map((user) => (
        <ul class="list-group" key={user.id}>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            {user.username}
            <Link
              class="badge bg-primary rounded-pill"
              href={`/users/${user.username}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();

  return {
    props: { users },
  };
}
