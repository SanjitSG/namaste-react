import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class Support extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>Support Component</h1>
        <UserClass
          name={"First Class Component"}
          location={"Goa"}
        />
        <UserClass
          name={"Second Class Component"}
          location={"BLR"}
        />
      </div>
    );
  }
}

export default Support;
