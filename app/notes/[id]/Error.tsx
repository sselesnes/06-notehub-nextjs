//notes/[id]/Error.tsx

"use client";

import css from "./Error.module.css";

export default function Error({ error }: { error: Error }) {
  return (
    <p className={css.error}>Could not fetch note details. {error.message}</p>
  );
}
