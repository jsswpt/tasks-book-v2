import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      Home
      <div>
        <Outlet />
      </div>
    </>
  );
};
