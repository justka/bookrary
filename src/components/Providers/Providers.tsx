import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "store/store";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import NiceModal from "@ebay/nice-modal-react";

export const Providers = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://flyby-router-demo.herokuapp.com/",
  });
  return (
    <React.StrictMode>
      <ToastContainer />
      <ApolloProvider client={client}>
        <NiceModal.Provider>
          <ReactReduxProvider store={store}>{children}</ReactReduxProvider>
        </NiceModal.Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
};
