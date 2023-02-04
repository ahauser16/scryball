import { Outlet } from "react-router-dom";

export default function BrandsLayout() {
  return (
    <div>
      <h2>Brands we know!</h2>

      <Outlet />
    </div>
  );
}

