import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "US",
        avatar_url: "",
      },
      count: 0,
    };
    console.log(this.props.user + " Constructor is called");
  }

  async componentDidMount() {
    console.log(this.props.user + " ComponentDidMount is called");

    const data = await fetch("https://api.github.com/users/sanjitSG");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.state.userInfo.name + " Component Did update");
  }

  componentWillUnmount() {
    console.log(this.props.user + " Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(this.state.userInfo.name + " render is called");
    const { count } = this.state;
    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Count increase
        </button>
        <h1>{count}</h1>
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
        <h4>Social: @SanjitGoa</h4>
        <img
          src={avatar_url}
          alt={name}
        />
      </div>
    );
  }
}

export default UserClass;
