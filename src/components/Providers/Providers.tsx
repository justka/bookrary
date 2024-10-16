import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "store/store";
import "react-toastify/dist/ReactToastify.css";

export const Providers = ({ children }) => {
  return (
    <React.StrictMode>
      <ToastContainer />
      <ReactReduxProvider store={store}>{children}</ReactReduxProvider>
    </React.StrictMode>
  );
};
