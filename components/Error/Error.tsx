//Error.tsx

import css from "./Error.module.css";

export interface ErrorProps {
  error: {
    message: string;
  };
}

export default function Error({ error }: ErrorProps) {
  return (
    <p className={css.error}>
      Could not fetch the list of notes. {error.message}
    </p>
  );
}
