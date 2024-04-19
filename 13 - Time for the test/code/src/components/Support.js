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
      <div className="w-full flex text-center">
        <h1 className="text-center font-bold">Support Component</h1>
        <hr />
        <div className="max-w-48 bg-lime-950 rounded-lg inline-block m-24 p-4">
          <UserClass user={"sanjitSG"} />
        </div>
      </div>
    );
  }
}

export default Support;
