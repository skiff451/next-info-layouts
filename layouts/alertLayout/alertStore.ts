import { useEffect, useReducer, useRef, useState } from "react";
import { useRouter } from "next/router";

type AlertContent = {
  id: number | string;
  alertElement: JSX.Element;
  closeAlertMs?: number;
};

type InitialStateType = {
  alerts: AlertContent[];
};

const initialAlertState: InitialStateType = {
  alerts: [],
};

const alertActions = {
  openAlert: (alert: AlertContent) =>
    ({
      type: "open",
      payload: alert,
    } as const),

  closeAlert: (id: number | string) =>
    ({
      type: "close",
      payload: id,
    } as const),
};

type InferAlertValuesTypes<T> = T extends { [key: string]: infer U }
  ? U
  : never;
type AlertActionTypes = ReturnType<InferAlertValuesTypes<typeof alertActions>>;

const alertReducer = (
  state: typeof initialAlertState,
  action: AlertActionTypes
) => {
  switch (action.type) {
    case "open":
      return {
        ...state,
        ...{ state, alerts: [...state.alerts, action.payload] },
      };
    case "close":
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };
    default:
      throw new Error();
  }
};

export const useContextAlertData = (): {
  alerts: AlertContent[];
  value: {
    closeAlert: (id: number | string) => void;
    openAlert: (alert: AlertContent) => void;
  };
} => {
  const [state, dispatch] = useReducer(alertReducer, initialAlertState);
  const alertCloseTimersId = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      alertCloseTimersId.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const openAlert = (alert: AlertContent) => {
    if (alert.closeAlertMs) {
      const timerId = setTimeout(() => {
        closeAlert(alert.id);
      }, alert.closeAlertMs);
      alertCloseTimersId.current.push(timerId);
    }
    dispatch(alertActions.openAlert(alert));
  };
  const closeAlert = (id: number | string) => {
    dispatch(alertActions.closeAlert(id));
  };
  return {
    alerts: state.alerts,
    value: {
      openAlert,
      closeAlert,
    },
  };
};

export type AlertContextValueType = {
  openAlert: (alert: AlertContent) => void;
  closeAlert: (id: number | string) => void;
};
