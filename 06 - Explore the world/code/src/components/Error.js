import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!</h1>
      <p>Page Not Found</p>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
