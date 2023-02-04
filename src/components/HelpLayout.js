import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div>
      <h2>Website Help</h2>
      <p>Placehold text</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

