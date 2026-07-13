import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="brand-logo">
                Logo
            </NavLink>

            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Home
                </NavLink>

                <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Profile
                </NavLink>

                <NavLink to="/project" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Project
                </NavLink>  

                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                About
                </NavLink>

            </div>
        </nav>
    );
}