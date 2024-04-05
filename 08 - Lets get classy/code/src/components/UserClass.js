import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    console.log(this.props.name + " Constructor");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("hello dev");
    }, 1000);
    console.log(this.props.name + " componentDidMount");
  }
  componentDidUpdate() {
    console.log(this.props.name + " Component Did update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + " Component will mount");
  }
  render() {
    console.log(this.props.name + " Render");
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Social: @SanjitGoa</h4>
      </div>
    );
  }
}

export default UserClass;
