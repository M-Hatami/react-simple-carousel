import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CarouselContainer from "./containers/CarouselContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CarouselContainer />
  </React.StrictMode>
);
