// Components/NavBar.js
import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Let's Lift</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="shoulders">Shoulders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="chest">Chest</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="biceps">Biceps</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="triceps">Triceps</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="legs">Legs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="abs">Abs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cardio">Cardio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sleep">Sleep</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
 );
};

export default NavBar;

//<NavLink to="/">Home</NavLink>

//<NavLink to="/Chest">Chest</NavLink>