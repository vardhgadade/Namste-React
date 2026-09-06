import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="flex gap-4 p-4 bg-gray-800 text-white">
      <Link to="/" className="[&.active]:font-bold">Home</Link>
      <Link to="/profile" className="[&.active]:font-bold">Profile</Link>
      <Link to="/Memo"  className="[&.active]:font-bold">Memoo</Link>
         <Link to="/useereff"  className="[&.active]:font-bold">useReff</Link>
    </header>
  );
}