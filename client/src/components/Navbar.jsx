import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="bg-zinc-700 flex justify-between px-10 py-4">
      <h1>React MySql</h1>
      <ul className="flex gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}
