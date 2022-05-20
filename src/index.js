import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDDzPvxJ-l5PiTv5An7Ka8KXQHaGMqY7G0",
  authDomain: "react-proyecto-bbd40.firebaseapp.com",
  projectId: "react-proyecto-bbd40",
  storageBucket: "react-proyecto-bbd40.appspot.com",
  messagingSenderId: "860165402657",
  appId: "1:860165402657:web:abd8f8717e4087072eb360",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
