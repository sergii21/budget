import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

function MainNavigation() {
  return (
    <header className="header">
      <nav>
        <ul className='list'>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/income"}>Income</NavLink>
          </li>
          <li>
            <NavLink to={"/planned-spents"}>Planned spents</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
