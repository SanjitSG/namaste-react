import { useState } from "react";

const User = (pros) => {
  const { name, location } = pros;
  const [count] = useState(0);
  const [count2] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>count2: {count2}</h1>
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Social: @SanjitGoa</h4>
    </div>
  );
};

export default User;
