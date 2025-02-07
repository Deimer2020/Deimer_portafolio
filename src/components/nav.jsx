/* import {Link} from "react-router-dom"
export default function Nav(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
            <div className="container px-5">
              <Link className="navbar-brand" to="/">
                {" "}
                <span className="fw-bolder text-primary">Menu</span>
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                  <li className="nav-item">
                    {" "}
                    <Link className="nav-link enlace" to="/">
                    <i className="fas fa-home"></i> Home
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link className="nav-link enlace" to="/resumen">
                    <i className="fas fa-file-alt"></i> Resumen
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link className="nav-link enlace" to="/proyecto">
                    <i className="fas fa-briefcase"></i> Proyectos
                    </Link>
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link className="nav-link enlace" to="/contacto">
                    <i className="fas fa-envelope"></i> Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
} */

    import { Link } from "react-router-dom";
// Asegúrate de tener un archivo CSS para los estilos

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <Link className="navbar-brand" to="/">
          <span className="fw-bolder text-primary">Menu</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li className="nav-item">
              <Link className="nav-link enlace" to="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link enlace" to="/resumen">
                <i className="fas fa-file-alt"></i> Resumen
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link enlace" to="/proyecto">
                <i className="fas fa-briefcase"></i> Proyectos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link enlace" to="/contacto">
                <i className="fas fa-envelope"></i> Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
