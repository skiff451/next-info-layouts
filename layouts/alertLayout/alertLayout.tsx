import * as React from "react";
import { FC } from "react";
import { useContextAlertData, AlertContextValueType } from "./alertStore";

import styles from "./styles.module.scss";

export const AlertContext = React.createContext<
  AlertContextValueType | undefined
>(undefined);

export const AlertLayout: FC = ({ children }) => {
  const contextData = useContextAlertData();

  const alertElements = contextData.alerts.map((alertItem) => (
    <div key={alertItem.id} className={styles.alertItem}>
      {alertItem.alertElement}
    </div>
  ));

  return (
    <>
      <AlertContext.Provider value={contextData.value}>
        <div className={styles.alertContainer}> {alertElements}</div>
        {children}
      </AlertContext.Provider>
    </>
  );
};
