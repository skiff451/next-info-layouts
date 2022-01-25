import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { SomeComponent } from "../components/modalExampleComponent";
import { ModalLayout } from "../layouts/modalLayout/modalLayout";
import { useModal } from "../layouts/modalLayout/useModal";

const ModalExample: NextPage = () => {
  return (
    <ModalLayout>
      <div className={styles.container}>
        <SomeComponent />
      </div>
    </ModalLayout>
  );
};

export default ModalExample;
