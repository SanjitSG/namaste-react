import React from "react";
import ReactDOM from "react-dom/client";

// react element written using jsx expression
const Title = (
  <h1 id="title" key="1">
    Heading
  </h1>
);

//component written using JSX
const TitleOne = () => (
  <div>
    {Title}
    <h1>i'm Title Rendered as JSX component.</h1>
  </div>
);

console.log(Title);
console.log(TitleOne);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleOne />);
