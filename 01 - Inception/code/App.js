const heading = React.createElement(
  "h1", //tagName
  {
    //props
    id: "title",
    className: "heading",
    style: {
      color: "red",
      fontSize: "40px",
    },
  },
  "Heading 1!" //content
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
