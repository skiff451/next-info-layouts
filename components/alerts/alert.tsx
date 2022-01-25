import React, { FC } from "react";

import styles from "./styles.module.scss";

type Props = {
  message: string;
  onClose: () => void;
};

export const AlertComponent: FC<Props> = ({ message, onClose }) => {
  return (
    <div className={styles.alert}>
      <span className={styles.close} onClick={onClose}>
        &#10006;
      </span>
      <span>{message}</span>
    </div>
  );
};
