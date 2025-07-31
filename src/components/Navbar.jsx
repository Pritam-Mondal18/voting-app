import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 dark:bg-gray-900 p-4 text-white flex justify-between items-center">
      {/* <ThemeToggle /> */}
      <h1 className="text-xl font-bold">Online Voting App</h1>
      <div className="flex items-center space-x-4">
        <Link to="/">Home</Link>
        <Link to="/elections">Elections</Link>
        <Link to="/vote">Vote</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
