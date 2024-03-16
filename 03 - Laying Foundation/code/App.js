import React from "react";
import ReactDOM from "react-dom/client";

const Title = function () {
  return <h1>i'm Title Rendered as Function. </h1>;
};

const TitleOne = () => {
  return <h1>i'm Title Rendered as JSX component.</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([Title(), <TitleOne />]);
