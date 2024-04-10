import React, { Component } from "react";
import UserClass from "./UserClass";

class Support extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
  }
  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>Support Component</h1>
        <UserClass user={"sanjitSG"} />
      </div>
    );
  }
}

export default Support;
