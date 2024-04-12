import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops!! Something went wrong</h1>
      <p>{err.statusText}</p>
    </>
  );
};

export default Error;
