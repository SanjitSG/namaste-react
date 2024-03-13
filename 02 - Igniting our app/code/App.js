import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    className: "heading",
    style: {
      color: "red",
      fontSize: "40px",
    },
  },
  "Heading 1 from parcel!!"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title 2",
    className: "heading",
    style: {
      color: "green",
      fontSize: "40px",
    },
  },
  "Heading 2!"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
