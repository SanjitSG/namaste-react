import React from "react";
import ReactDOM from "react-dom/client";

// react element written using jsx expression
const title = (
  <h1 id="title" key="1">
    Heading
  </h1>
);

//component written using JSX
const TitleOne = () => (
  <div>
    {title}
    <h1>i'm Title Rendered as JSX component.</h1>
  </div>
);

console.log(title);
console.log(TitleOne);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleOne />);
