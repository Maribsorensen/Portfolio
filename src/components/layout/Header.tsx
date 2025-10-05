import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header className="shadow-md">
      <nav className="flex justify-center items-center py-4">
        <ul className="flex gap-8 text-lg font-heading uppercase">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-cta ${isActive ? 'text-cta' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-cta ${isActive ? 'text-cta' : ''}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-cta ${isActive ? 'text-cta' : ''}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
