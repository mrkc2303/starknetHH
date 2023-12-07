import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App.js";

import './index.css'
import {  ConnectContextProvider } from "./context/ConnectContext.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      
      <ConnectContextProvider>
      <App />
      </ConnectContextProvider>
      
    </React.StrictMode>,
  )