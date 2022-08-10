import { AlertContext } from "../context/alert-context";
import { useReducer } from "react";
import { alertReducer } from "../reducer/alert-reducer";
import { AlertManager } from "components/alert-manger";

const initialState = {data: []}

export const AlertProvider = ({children}) => {

  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <AlertContext.Provider value={{ state, dispatch }}>
      <AlertManager />
      {children}
    </AlertContext.Provider>
  );
};
