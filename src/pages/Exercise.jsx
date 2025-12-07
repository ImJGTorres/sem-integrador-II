import { useParams, Link } from 'react-router-dom';
import exercisesData from '../data';
import Visualizer1 from '../visualizers/Visualizer1';
import Visualizer2 from '../visualizers/Visualizer2';
import Visualizer3 from '../visualizers/Visualizer3';
import Visualizer4 from '../visualizers/Visualizer4';
import Visualizer5 from '../visualizers/Visualizer5';
import Visualizer6 from '../visualizers/Visualizer6';
import Visualizer7 from '../visualizers/Visualizer7';
import Visualizer8 from '../visualizers/Visualizer8';
import Visualizer9 from '../visualizers/Visualizer9';

const Exercise = () => {
  const { id } = useParams();
  const data = exercisesData[parseInt(id)] || { title: 'Ejercicio no encontrado' };

  return (
    <div className="container py-4">
      <section className="mb-5">
        <div className="align-items-center row g-0">
          <div className="col-12 col-md-1 text-center text-md-end mb-2 mb-md-0">
            <img src={data.icon} alt="hotel" style={{ width: '70px' }} />
          </div>
          <div className="col-12 col-md-11">
            <h2 style={{ fontWeight: 700 }}>{data.title}</h2>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="row align-items-center mt-4">
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <div className="card bg-main text-white shadow-sm border-0">
              <div className="card-body card-scroll" style={{ maxHeight: '700px', overflowY: 'auto', textAlign: 'center', padding: '20px'}}>
                <h3 className="card-title">Enunciado</h3>
                <p style={{ whiteSpace: 'pre-wrap' }}>{data.description}</p>
                <hr />
                <h5><strong>Entrada</strong></h5>
                <p style={{ whiteSpace: 'pre-wrap' }}>{data.entrada}</p>
                <h5><strong>Salida</strong></h5>
                <p style={{ whiteSpace: 'pre-wrap' }}>{data.salida}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 mb-3 mb-md-0 text-center">
            {data.pdfExplicacion ? (
              <iframe className="pdf" src={`${data.pdfExplicacion}#zoom=100`} width="100%" height="700"></iframe>
            ) : (
              <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '480px' }}>
                <iframe src={data.video.replace('youtu.be/', 'www.youtube.com/embed/').replace('?feature=shared', '')} allowFullScreen></iframe>
              </div>
            )}
          </div>

        </div>
      </section>

      {data.visualization && (
        <section className="mb-5">
          <h2>Visualización</h2>
          {parseInt(id) === 1 ? (
            <Visualizer1 />
          ) : parseInt(id) === 2 ? (
            <Visualizer2 />
          ) : parseInt(id) === 3 ? (
            <Visualizer3 />
          ) : parseInt(id) === 4 ? (
            <Visualizer4 />
          ) : parseInt(id) === 5 ? (
            <Visualizer5 />
          ) : parseInt(id) === 6 ? (
            <Visualizer6 />
          ) : parseInt(id) === 7 ? (
            <Visualizer7 />
          ) : parseInt(id) === 8 ? (
            <Visualizer8 />
          ) : parseInt(id) === 9 ? (
            <Visualizer9 />
          ) : (
            <p>Visualizador no disponible para este ejercicio</p>
          )}
        </section>
      )}

      <section className="mb-5">
        <h2>¡¡Inténtalo tu mismo!!</h2>
        <div className="row m-5 align-items-center">
          <div className="texto-conceptos col-12 col-md-6 text-center text-md-start">
            <p>Anímate a intentar resolverlo tú mismo, aquí está la plantilla del ejercicio con los casos de prueba, solo tienes que completar los métodos y probar el código.</p>
          </div>
          <div className="col-12 col-md-6 mb-3 mb-md-0 text-center">
            <button className="btn-1" onClick={() => window.open(data.template)}>Plantilla del ejercicio</button>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="row align-items-center mt-4">
          <div className="col-12 col-md-8 mb-3 mb-md-0 text-center">
            {data.pdfSolucion ? (
              <iframe className="pdf" src={`${data.pdfSolucion}#zoom=100`} width="100%" height="700"></iframe>
            ) : (
              <div className="ratio ratio-16x9 mx-auto" style={{ maxWidth: '480px' }}>
                <iframe src={data.solutionVideo.replace('youtu.be/', 'www.youtube.com/embed/').replace('?feature=shared', '')} allowFullScreen></iframe>
              </div>
            )}
          </div>

          <div className="textoDer col-12 col-md-4 pe-lg-5">
            <div className="content-wrapper">
              <h3>Solución del ejercicio</h3>
              <p>En este video se presenta la solución del ejercicio mediante dos soluciones, una cándida y otra óptima, adicionalmente dejamos el enlace de la solución en gitlab para más profundización.
              </p>
              <div className="button-container">
                <button className="btn-1" onClick={() => window.open(data.github)}>GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="mb-5">
        <div className="row align-items-center justify-content-center mt-4">
          <div className="texto-conceptos col-12 col-md-4 text-start">
            <h3>Análisis de complejidad</h3>
            <p>En este PDF se presenta el análisis de complejidad del ejercicio , mostrando paso a paso cómo resolver el T(n).</p>
          </div>
          <div className="texto-conceptos col-12 col-md-8 text-center">
            <iframe className="pdf" src={`${data.pdf}#zoom=100`} width="100%" height="700"></iframe>
          </div>
        </div>
      </section>


      <section className="mb-5">
        <div className="row align-items-center mt-4">
          <div className="w-100">
            <div className="d-flex justify-content-between pe-md-5 ps-md-5">
              {parseInt(id) > 1 && (
                <button className="btn-1" onClick={() => window.location.href = `/ejercicio/${parseInt(id) - 1}`}>Ejercicio Anterior</button>
              )}
              {parseInt(id) < 9 && (
                <button className="btn-1" onClick={() => window.location.href = `/ejercicio/${parseInt(id) + 1}`}>Siguiente Ejercicio</button>
              )}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Exercise;