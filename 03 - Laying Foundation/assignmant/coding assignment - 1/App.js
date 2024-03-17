import React from "react";
import ReactDOM from "react-dom/client";

//// Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
// const header = React.createElement(
//   "div",
//   {
//     id: "title",
//   },
//   [
//     React.createElement(
//       "h1",
//       {
//         key: "h1",
//       },
//       "Heading 1"
//     ),
//     React.createElement(
//       "h2",
//       {
//         key: "h2",
//       },
//       "Heading 2"
//     ),
//     React.createElement(
//       "h3",
//       {
//         key: "h3",
//       },
//       "Heading 3"
//     ),
//   ]
// );
/* ---------------------------------------------- */

// Q: Create the same element using JSX expression

// const header = (
//   <div className="title">
//     <h1 key="h1">Heading 1 - JSX expression</h1>
//     <h2 key="h2">Heading 2 - JSX expression</h2>
//     <h3 key="h3">Heading 3 - JSX expression</h3>
//   </div>
// );
/* ---------------------------------------------- */

// Q: Create a functional component of the same with JSX

// const Header = () => (
//   <div className="Title">
//     <h1 key="h1">Header 1 - from Component</h1>
//     <h2 key="h2">Header 2 - from Component</h2>
//     <h3 key="h3">Header 3 - from Component</h3>
//   </div>
// );
/* ---------------------------------------------- */

// Q: Pass attributes into the tag in JSX
// const Header = () => (
//   <div className="Title">
//     <h1 style={{ color: "red" }} key="h1">
//       Header 1 - from Component
//     </h1>
//     <h2 style={{ color: "green" }} key="h2">
//       Header 2 - from Component
//     </h2>
//     <h3 style={{ color: "blue" }} key="h3">
//       Header 3 - from Component
//     </h3>
//   </div>
// );
/* ---------------------------------------------- */

// Q:Composition of Component(Add a component inside another)
// const SubHeading = () => (
//   <div>
//     <hr></hr>
//     <h2>This is sub Heading!</h2>
//   </div>
// );

// const Header = () => (
//   <div className="Title">
//     <h1 style={{ color: "red" }} key="h1">
//       Header 1 - from Component
//     </h1>
//     <h2 style={{ color: "green" }} key="h2">
//       Header 2 - from Component
//     </h2>
//     <h3 style={{ color: "blue" }} key="h3">
//       Header 3 - from Component
//     </h3>

//     {/* adding SubHeading component inside Header */}
//     <SubHeading />
//   </div>
// );
/* ---------------------------------------------- */

// Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.

// 1. {TitleComponent} - react Element or a variable
const TitleElement = <h1>TitleElement</h1>; //This is a react Element created using jsx syntax. it returns an object

// 2 {<TitleComponent/>}
const TitleComponent = () => (
  <div>
    <h1>This is functional component `TitleComponent`</h1>
  </div>
);

const Header = () => (
  <div className="Title">
    <h1 style={{ color: "red" }} key="h1">
      {TitleElement}
      <hr />
    </h1>
    <h2 style={{ color: "green" }} key="h2">
      <TitleComponent />
      <hr />
    </h2>
    <h3 style={{ color: "blue" }} key="h3">
      <p>* PlaceHolder for future child elements</p>
      <TitleComponent></TitleComponent>
    </h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
