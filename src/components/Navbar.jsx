import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ background: 'linear-gradient(to right, #434343, #000)' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Desglosando Algoritmos</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ejercicios
              </a>
              <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end custom-dropdown">
                <li><Link className="dropdown-item" to="/ejercicio/1"><strong>Ejercicio 1</strong> - Hotels Along the Croatian Coast</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/2"><strong>Ejercicio 2</strong> - Calculating Function</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/3"><strong>Ejercicio 3 </strong>- Favorite Sequence</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/4"><strong>Ejercicio 4 </strong>- 2^Sort</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/5"><strong>Ejercicio 5 </strong>- Walk on a multiplication table</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/6"><strong>Ejercicio 6 </strong>- Vlad and a Sum of Digits</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/7"><strong>Ejercicio 7 </strong>- Simple Repetition</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/8"><strong>Ejercicio 8 </strong>- Diverse Team</Link></li>
                <li><Link className="dropdown-item" to="/ejercicio/9"><strong>Ejercicio 9 </strong>- Worms</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;