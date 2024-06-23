import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Card1 from "./pages/card1";
import Card2 from "./pages/card2";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";

export default function Ap() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="card1" element={<Card1 />} />
          <Route path="card2" element={<Card2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.
// The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /