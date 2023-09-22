// Components/NavBar.js
import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <NavLink to="/">Home</NavLink>
          </li>
          <li>
             <NavLink to="/Chest">Chest</NavLink>
          </li>
       </ul>
 </nav>
 );
};

export default NavBar;