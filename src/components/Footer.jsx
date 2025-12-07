const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ background: 'linear-gradient(to right, #070707, #000)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Desglosando Algoritmos</h5>
            <ul className="list-unstyled">
              <li>Universidad Francisco de Paula Santander</li>
              <li>2025</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Equipo</h5>
            <ul className="list-unstyled">
              <li>Jesús Gabriel Torres Daza</li>
              <li>Emerson Amir Vera Gonzalez</li>
              <li>Johan Steven Bueno Rojas</li>
              <li>Kevin David Arias Villamizar</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 footer-section">
            <h5>Secciones</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Inicio</a></li>
              <li><a href="#ejercicios" className="text-white text-decoration-none">Ejercicios</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 footer-section">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/in/jes%C3%BAs-gabriel-torres-daza-437625262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="text-white text-decoration-none"><i className="fab fa-linkedin me-2"></i>LinkedIn Gabriel Torres</a></li>
              <li><a href="www.linkedin.com/in/emerson-vera-gonzalez-8a1274272" target="_blank" className="text-white text-decoration-none"><i className="fab fa-linkedin me-2"></i>LinkedIn Emerson Vera</a></li>
              <li><a href="https://www.linkedin.com/in/johan-steven-bueno-rojas-00958326b/" target="_blank" className="text-white text-decoration-none"><i className="fab fa-linkedin me-2"></i>LinkedIn Steven Bueno</a></li>
              <li><a href="https://www.linkedin.com/in/kevin-arias-319728369/" target="_blank" className="text-white text-decoration-none"><i className="fab fa-linkedin me-2"></i>LinkedIn Kevin Arias</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-secondary border-top pt-3 mt-4 small">
          © 2025 Desglosando Algoritmos. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;