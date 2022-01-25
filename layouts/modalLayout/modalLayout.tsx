import * as React from "react";
import { FC, useEffect, useRef } from "react";
import { useContextModalData, ContextValueType } from "./modalStore";

import styles from "./styles.module.scss";

export const ModalContext = React.createContext<ContextValueType | undefined>(
  undefined
);

export const ModalLayout: FC = ({ children }) => {
  const contextData = useContextModalData();
  const modalContainer = useRef(null);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    if (contextData.value.isOpenModal) {
      body.style.overflow = "hidden";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [contextData.value.isOpenModal]);

  return (
    <>
      <ModalContext.Provider value={contextData.value}>
        {contextData.value.isOpenModal && (
          <div className={styles.outerContainer}>
            <div
              className={styles.backgroundContainer}
              onClick={(e) => {
                if (e.target === modalContainer.current) {
                  contextData.value.closeModal();
                }
              }}
            >
              <div
                ref={modalContainer}
                className={styles.modalElementContainer}
              >
                {contextData.modalElement}
              </div>
            </div>
          </div>
        )}
        {children}
      </ModalContext.Provider>
    </>
  );
};
