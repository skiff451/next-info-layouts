import type { NextPage } from "next";
import { AlertLayout } from "../layouts/alertLayout/alertLayout";
import { AlertExampleComponent } from "../components/alertExampleComponent";

const AlertExample: NextPage = () => {
  return (
    <AlertLayout>
      <AlertExampleComponent />
    </AlertLayout>
  );
};

export default AlertExample;
