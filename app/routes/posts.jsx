import { Outlet } from "remix";

const Posts = () => {
  return (
    <div>
      {/* <h1>This is Posts route</h1> */}
      <Outlet />
    </div>
  );
};

export default Posts;
