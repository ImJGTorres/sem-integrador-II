import { useEffect } from 'react';

const Visualizer2 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let num = 0;
    let velocidad = 500;

    function dormir(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dibujarBarras(ctx, arr, limite, resaltados = [], maxSuma = 0, colorNormal = '#58a6ff', colorResaltado = '#f78166') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ancho = canvas.width / arr.length;
      const maxValor = Math.max(...arr, limite);
      arr.forEach((v, i) => {
        const h = (v / maxValor) * 150;
        const x = i * ancho;
        const y = canvas.height - h;
        ctx.fillStyle = resaltados.includes(i) ? colorResaltado : colorNormal;
        ctx.fillRect(x, y, ancho - 2, h);
        ctx.fillStyle = '#c9d1d9';
        ctx.font = '14px "Open Sans"';
        ctx.fillText(v, x + 4, y - 4);
      });
      ctx.fillStyle = '#8b949e';
      ctx.fillText(`Máximo encontrado: ${maxSuma}`, 10, 20);
    }

    async function metodoCandido() {
      const n = num;
      let uno = -1;
      let resultado = 0;

      for (let i = 1; i <= n; i++) {
        resultado += uno * i;
        uno *= -1;

        const barras = Array.from({ length: i }, (_, k) => k + 1);
        const valores = barras.map(v => (v % 2 === 0 ? -v : v));
        dibujarBarras(ctx, valores, n, [], resultado, '#58a6ff', '#f78166');
        document.getElementById('info').innerText = `Paso ${i}: resultado = ${resultado}`;
        await dormir(velocidad);
      }

      document.getElementById('info').innerText = `Resultado final (candido): ${resultado}`;
    }

    async function metodoOptimo() {
      let resultado;
      const n = num;

      if (n % 2 === 0) {
        resultado = n / 2;
      } else {
        resultado = ((n + 1) / 2) * -1;
      }

      const valores = [resultado];
      dibujarBarras(ctx, valores, n, [], resultado, '#58a6ff', '#f78166');
      document.getElementById('info').innerText = `Resultado final (óptimo): ${resultado}`;
    }

    window.iniciar = (tipo) => {
      num = parseInt(document.getElementById('numInput').value);
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
        <input type="number" id="numInput" defaultValue="10" />
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

export default Visualizer2;
