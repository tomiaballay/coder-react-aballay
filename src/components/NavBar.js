import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function  App () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light App">
        <a className="navbar-brand" href="#">M I M A D A S</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#"> INICIO <span class="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TIENDA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">DUDAS</a>
            </li>
       
          </ul>
        </div>
      </nav>
    );
}