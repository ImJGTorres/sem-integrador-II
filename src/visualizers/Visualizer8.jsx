import { useEffect } from 'react';

const Visualizer8 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let ratings = [];
    let k = 0;
    let velocidad = 500;

    function dormir(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dibujarBarras(ratings, limite, resaltados = []) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ancho = canvas.width / ratings.length;
      const maxValor = Math.max(...ratings, limite);
      ratings.forEach((v, i) => {
        const h = (v / maxValor) * 150;
        const x = i * ancho;
        const y = canvas.height - h;
        ctx.fillStyle = resaltados.includes(i) ? '#f78166' : '#58a6ff';
        ctx.fillRect(x, y, ancho - 2, h);
        ctx.fillStyle = '#c9d1d9';
        ctx.font = '14px "Open Sans"';
        ctx.fillText(v, x + 4, y - 4);
      });
    }

    async function metodoCandido() {
      const n = ratings.length;
      const indices = new Array(k);
      let contador = 0;
      let pasoVis = 0;

      for (let i = 0; i < n; i++) {
        let existe = false;

        for (let j = 0; j < contador; j++) {
          pasoVis++;
          const idx = indices[j] - 1;
          dibujarBarras(ratings, Math.max(...ratings) + 1, [i, idx], contador);
          document.getElementById('info').innerText = `Paso ${pasoVis}: ¿ratings[${i}]==ratings[${idx}]? ${ratings[i] === ratings[idx] ? 'SÍ→descartado' : 'NO'}`;
          await dormir(velocidad);

          if (ratings[i] === ratings[idx]) {
            existe = true;
            break;
          }
        }

        if (!existe && contador < k) {
          indices[contador] = i + 1;
          contador++;
          dibujarBarras(ratings, Math.max(...ratings) + 1, indices.map(id => id - 1), contador);
          document.getElementById('info').innerText = `Nuevo único: índice ${i + 1} (total ${contador}/${k})`;
          await dormir(velocidad);
        }

        if (contador === k) break;
      }

      const res = contador === k ? indices : null;
      document.getElementById('info').innerText = `Resultado (candido): ${res ? '[' + res.join(', ') + ']' : 'null'}`;
    }

    async function metodoOptimo() {
      const n = ratings.length;
      const vistos = new Set();
      const resultado = new Array(k);
      let contador = 0;
      let pasoVis = 0;

      for (let i = 0; i < n && contador < k; i++) {
        pasoVis++;
        const v = ratings[i];

        if (!vistos.has(v)) {
          vistos.add(v);
          resultado[contador] = i + 1;
          contador++;

          dibujarBarras(ratings, Math.max(...ratings) + 1, [i], contador);
          document.getElementById('info').innerText = `Paso ${pasoVis}: nuevo único ratings[${i}] = ${v} → índices ${resultado.slice(0, contador).join(',')}`;
          await dormir(velocidad);
        }
      }

      const res = contador === k ? resultado : null;
      document.getElementById('info').innerText = `Resultado (óptimo): ${res ? '[' + res.join(', ') + ']' : 'null'}`;
    }

    window.iniciar = (tipo) => {
      const input = document.getElementById('ratingsInput').value;
      ratings = input.split(',').map(Number);
      k = parseInt(document.getElementById('kInput').value);
      velocidad = parseInt(document.getElementById('velocidad').value);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (tipo === 'candido') metodoCandido();
      else if (tipo === 'optimo') metodoOptimo();
    };

    return () => {
      delete window.iniciar;
    };
  }, []);

  return (
    <>
      <div className="controls">
        <label>Ratings (separados por comas):</label>
        <input type="text" id="ratingsInput" defaultValue="1,2,2,3,3,3" />
        <label>k:</label>
        <input type="number" id="kInput" defaultValue="2" />
        <div style={{ marginTop: '15px' }}>
          <button onClick={() => window.iniciar('candido')}>Método Candido</button>
          <button onClick={() => window.iniciar('optimo')}>Método Óptimo</button>
        </div>
        <label>Velocidad (ms):</label>
        <input type="range" id="velocidad" min="100" max="2000" defaultValue="500" />
      </div>
      <canvas id="canvas" width="800" height="200"></canvas>
      <p id="info"></p>
    </>
  );
};

export default Visualizer8;
