import { Link } from "@tanstack/react-router";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/employee">Employee</Link>
    </nav>
  );
};

export default Navbar;
