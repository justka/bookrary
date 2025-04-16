import { NavLink } from "react-router-dom";

export function Menu() {
  return (
    <nav>
      <NavLink
        end
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        end
        to="/stats"
      >
        Statistics
      </NavLink>
    </nav>
  );
}
