import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <h1>Count: {count2}</h1>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Social: @SanjitGoa</h4>
      </div>
    );
  }
}

export default UserClass;
