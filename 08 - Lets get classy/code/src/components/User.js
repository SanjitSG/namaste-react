const User = (pros) => {
  const { name, location } = pros;
  return (
    <div className="user-card">
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
      <h4>Social: @SanjitGoa</h4>
    </div>
  );
};

export default User;
