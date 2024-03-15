import React from "react";
import ReactDOM from "react-dom/client";

const para = React.createElement(
  "p",
  {
    id: "para",
  },
  "This is para"
);

const Title = () => <h1>i'm title </h1>;

const HeaderComponent2 = () => (
  <div>
    <h1>Header component 2</h1>
    <h2>This is h2</h2>
    <p>Im invoked as function</p>
    {Title()}
    <hr />
  </div>
);

const HeaderComponent3 = () => (
  <div>
    <h1>Header component 3</h1>
    <h2>This is h3</h2>
    {<Title />}
    {para}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render([<HeaderComponent2 />, <HeaderComponent3 />]);
