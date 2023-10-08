import { FC } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar: FC = () => {
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <div className="Navbar__logo-container"></div>
        <nav className="Navbar__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Project Management</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
