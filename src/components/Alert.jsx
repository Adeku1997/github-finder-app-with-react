import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    <div>
      <small>{alert}</small>
    </div>
  );
};

export default Alert;
