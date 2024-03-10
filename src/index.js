import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import { deposit, payLoan, requestLoan, withdraw } from "./features/account/accountSlice";
import { updateName, create } from "./features/customer/customerSlice";
import { Provider } from "react-redux";

store.dispatch(deposit(5000));
store.dispatch(withdraw(2000));
store.dispatch(requestLoan(10000, "Buat beli es teh"));
store.dispatch(payLoan());

store.dispatch(updateName("Dibimbing"));
store.dispatch(create("Muhammad Saifur Rizal"));

console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
