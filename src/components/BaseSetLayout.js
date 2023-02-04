import { Outlet } from "react-router-dom";

export default function BaseSetLayout() {
  return (
    <div>
      <h2>We know our baseball!</h2>

      <h2>Where are we?</h2>

      <Outlet />
    </div>
  );
}

