import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./Bai2.css";
import { store } from '../src/Conponents/gio/stone'
import { Provider } from 'react-redux'
import ShopConTextProvider from "./Conponents/hero/ShopContext.jsx";
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <StrictMode>
  <ShopConTextProvider>
    <App />
   
  </ShopConTextProvider>
  </StrictMode>
  </Provider>
);
