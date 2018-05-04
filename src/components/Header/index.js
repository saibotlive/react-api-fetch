import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyled } from '../../ui/Styles';

const Header = () => (
  <HeaderStyled>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/flickr">Flickr</Link>
        </li>
        <li>
          <Link to="/places">Places</Link>
        </li>
      </ul>
    </nav>
  </HeaderStyled>
);
export default Header;
