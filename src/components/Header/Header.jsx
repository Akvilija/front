import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerColor}>
      <nav className={styles.navigationStyle}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wizards"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              Wizards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spells"
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              Spells
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;