import User from "./User";
import UserClass from "./UserClass";

const Support = () => {
  return (
    <div>
      <h1>Support Component</h1>
      <User
        name={"Sanjit Functional"}
        location={"Goa"}
      />
      <UserClass
        name={"Sanjit Class"}
        location={"BLR"}
      />
    </div>
  );
};

export default Support;
