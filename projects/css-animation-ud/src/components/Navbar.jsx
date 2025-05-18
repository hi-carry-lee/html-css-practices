import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-10 py-4 bg-gray-100 ">
      <div className="container mx-auto flex items-center gap-4">
        <button className="rounded-md bg-slate-300 px-4 py-2 text-lg font-semibold hover:bg-slate-500 duration-500">
          <Link to="/">Back to home</Link>
        </button>
        <button className="rounded-md bg-slate-300 px-4 py-2 text-lg font-semibold hover:bg-slate-500 duration-500">
          Back one step
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
