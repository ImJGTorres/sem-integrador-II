import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container py-4">
      <section className="mb-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2>
              <strong id="griss">Desglosando algoritmos: </strong>
              <h3>Correctitud, Completitud y Complejidad</h3>
            </h2>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="imagenes/codigo.png"
              alt="Ejercicio 3"
              className="img-fluid"
              style={{ maxHeight: '250px' }}
            />
          </div>
        </div>
      </section>

      <section>
        <div className="row align-items-center mt-4">
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-center">
            <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '480px' }}>
              <img src="https://www.ie.edu/insights/wp-content/uploads/2020/06/El-poder-de-los-algoritmos-2000x1131-1.jpg"
    alt="El poder de los algoritmos"
    style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '8px', margin: '20px auto', display: 'block' }} />
            </div>
          </div>
          <div
            className="texto-conceptos col-12 col-md-6 text-center text-md-start"
          >
            <p>
              <strong>Desglosando algoritmos</strong> es una herramienta
              educativa para estudiantes de Análisis de Algoritmos. Presenta
              ejercicios con descripciones, soluciones en código y análisis de
              complejidad, reforzando la comprensión de eficiencia y
              correctitud. Además, explica los conceptos de correctitud y
              completitud, brindando una base sólida para el estudio de
              algoritmos.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 id="titulo-conceptos" className="mt-5">Conceptos básicos</h2>
        <div className="concepts row mt-4">
          <div className="texto-conceptos col-12 col-md-4 mb-4 mb-md-0">
            <h3>Correctitud</h3>
            <p>
              Un algoritmo es correcto si produce la salida esperada para todas
              las entradas válidas, garantizando que su solución es válida en
              todos los casos.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4 mb-md-0 text-center">
            <div className="ratio ratio-16x9">

            </div>
          </div>
          <div className="texto-conceptos col-12 col-md-4">
            <h3>Completitud</h3>
            <p>
              Un algoritmo es completo si, dado un conjunto de entradas válidas,
              siempre es capaz de encontrar una solución cuando ésta existe.
            </p>
          </div>
        </div>
      </section>

      <section id="ejercicios">
        <h2>Ejercicios</h2>
        <div className="exercises row">
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/1">
              <div className="image-container">
                <img
                  src="imagenes/hotel.png"
                  alt="Ejercicio 1"
                  className="main-image img-fluid"
                />
                <img
                  src="imagenes/facil.png"
                  alt="Facil"
                  className="overlay-image img-fluid"
                />
              </div>
              <p>
                <strong>Ejercicio 1</strong><br />Hotels Along the Croatian
                Coast
              </p>
            </Link>
          </div>
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/2">
              <div className="image-container">
                <img
                  src="imagenes/funcion.png"
                  alt="Ejercicio 2"
                  className="main-image img-fluid"
                />
                <img
                  src="imagenes/facil.png"
                  alt="Facil"
                  className="overlay-image img-fluid"
                />
              </div>
              <p><strong>Ejercicio 2</strong><br />Calculating Function</p>
            </Link>
          </div>
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/3">
              <div className="image-container">
                <img
                  src="imagenes/secuencia.png"
                  alt="Ejercicio 3"
                  className="main-image img-fluid"
                />
                <img
                  src="imagenes/facil.png"
                  alt="Facil"
                  className="overlay-image img-fluid"
                />
              </div>
              <p><strong>Ejercicio 3</strong><br />Favorite Sequence</p>
            </Link>
          </div>
        </div>

        {/* SEGUNDA FILA */}
        <div className="exercises row">
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/4">
              <div className="image-container">
                <img
                  src="imagenes/ordenado.png"
                  alt="Ejercicio 1"
                  className="main-image"
                />
                <img
                  src="imagenes/medio.png"
                  alt="Medio"
                  className="overlay-image"
                />
              </div>
              <p><strong>Ejercicio 4</strong><br />2^Sort</p>
            </Link>
          </div>
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/5">
              <div className="image-container">
                <img
                  src="imagenes/multiplicar.png"
                  alt="Ejercicio 2"
                  className="main-image"
                />
                <img
                  src="imagenes/medio.png"
                  alt="Medio"
                  className="overlay-image"
                />
              </div>
              <p>
                <strong>Ejercicio 5</strong><br />Walk on a multiplication
                table
              </p>
            </Link>
          </div>
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/6">
              <div className="image-container">
                <img
                  src="imagenes/suma.png"
                  alt="Ejercicio 3"
                  className="main-image"
                />
                <img
                  src="imagenes/medio.png"
                  alt="medio.png"
                  className="overlay-image"
                />
              </div>
              <p><strong>Ejercicio 6</strong><br />Vlad and a Sum of Digits</p>
            </Link>
          </div>
        </div>

        {/* TERCERA FILA */}
        <div className="exercises row">
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/7">
              <div className="image-container">
                <img
                  src="imagenes/repeticion.png"
                  alt="Ejercicio 1"
                  className="main-image"
                />
                <img
                  src="imagenes/dificil.png"
                  alt="Dificil"
                  className="overlay-image"
                />
              </div>
              <p><strong>Ejercicio 7</strong><br />Simple Repetition</p>
            </Link>
          </div>
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/8">
              <div className="image-container">
                <img
                  src="imagenes/team.png"
                  alt="Ejercicio 2"
                  className="main-image"
                />
                <img
                  src="imagenes/dificil.png"
                  alt="Dificil"
                  className="overlay-image"
                />
              </div>
              <p><strong>Ejercicio 8</strong><br />Diverse Team</p>
            </Link>
          </div>
          <div className="exercise col-12 col-sm-6 col-md-4 mb-4">
            <Link to="/ejercicio/9">
              <div className="image-container">
                <img
                  src="imagenes/gusano.png"
                  alt="Ejercicio 3"
                  className="main-image"
                />
                <img
                  src="imagenes/dificil.png"
                  alt="Dificil"
                  className="overlay-image"
                />
              </div>
              <p><strong>Ejercicio 9</strong><br />Worms</p>
            </Link>
          </div>
        </div>

        {/* CUARTA FILA */}
        <div className="exercises row">

        </div>
      </section>
    </div>
  );
};

export default Home;