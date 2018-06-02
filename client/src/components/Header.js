import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={'/'}
            className="left brand-logo"
          >
            Car Lovers
          </Link>
          <ul className="right">
            <li>
                <a href="/search">Search</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;
