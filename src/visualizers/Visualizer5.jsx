import { useEffect } from 'react';

const Visualizer5 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let num = 0;
    let velocidad = 500;

    function dormir(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dibujarBarras(barras, limite, resaltados = [], maxSuma = 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ancho = canvas.width / barras.length;
      const maxValor = Math.max(...barras, limite);
      barras.forEach((v, i) => {
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
      const n = num;
      let minMoves = Infinity;
      let pasoVis = 0;

      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          const producto = i * j;
          if (producto === n) {
            const moves = (i - 1) + (j - 1);
            if (moves < minMoves) minMoves = moves;

            const barras = [i, j];
            dibujarBarras(barras, n + 2, [0, 1], minMoves);
            pasoVis++;
            document.getElementById('info').innerText = `Paso ${pasoVis}: i=${i}, j=${j} → moves=${moves} (min=${minMoves})`;
            await dormir(velocidad);
          }
        }
      }

      document.getElementById('info').innerText = `Mínimo movimientos (candido): ${minMoves}`;
    }

    async function metodoOptimo() {
      const n = num;
      let mayor = 0;
      let pasoVis = 0;

      for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
          mayor = i;
          pasoVis++;

          const barras = [i, n / i];
          const moves = i + (n / i) - 2;
          dibujarBarras(barras, n + 2, [0], moves);
          document.getElementById('info').innerText = `Paso ${pasoVis}: divisor ${i} → moves=${moves}`;
          await dormir(velocidad);
        }
      }

      const resultado = mayor + (n / mayor) - 2;
      document.getElementById('info').innerText = `Mínimo movimientos (óptimo): ${resultado}`;
    }

    window.iniciar = (tipo) => {
      num = parseInt(document.getElementById('nInput').value);
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
        <label>Número n:</label>
        <input type="number" id="nInput" defaultValue="12" />
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

export default Visualizer5;
