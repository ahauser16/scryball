import { Outlet } from "react-router-dom";

export default function BaseSetLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

