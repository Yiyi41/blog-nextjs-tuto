import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navBarContainer}>
      <Link href={"/"}>Accueil</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/users"}>Membres</Link>
    </nav>
  );
}
