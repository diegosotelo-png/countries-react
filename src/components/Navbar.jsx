import { Link } from "react-router-dom";
import { Globe2 } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-xl text-slate-800"
        >
          <Globe2 className="text-blue-600" />
          World Explorer
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="text-slate-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/entities" className="text-slate-700 hover:text-blue-600">
            Entities
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;