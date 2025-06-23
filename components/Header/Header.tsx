//Header.tsx

import React from "react";
import css from "./Header.module.css";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className={css.header}>
      <a href="/" aria-label="Home">
        NoteHub
      </a>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/notes">Notes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
