
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

function  NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light App">
        <NavLink className = "navbar-brand" to="/">M I M A D A S</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav_link"  to="/category/cabello"> CABELLO <span class="sr-only"></span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/category/aroma"> AROMA </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/item">DUDAS</NavLink>
            </li>
            <li>
              <CartWidget />
            </li>

          </ul>
        </div>
      </nav>
    );
}

export default NavBar;