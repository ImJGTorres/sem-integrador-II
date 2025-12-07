import { useEffect } from 'react';

const Visualizer4 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let arr = [];
    let k = 0;
    let velocidad = 500;

    function dormir(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dibujarBarras(arr, limite, resaltados = []) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ancho = canvas.width / arr.length;
      const maxValor = Math.max(...arr, limite);
      arr.forEach((v, i) => {
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
      const n = arr.length;
      let respuesta = 0;
      let pasoVis = 0;

      for (let i = 0; i <= n - k - 1; i++) {
        let valido = 0;

        for (let j = i; j < i + k; j++) {
          pasoVis++;
          const cumple = arr[j] < 2 * arr[j + 1];
          if (cumple) valido++;

          dibujarBarras(arr, Math.max(...arr) * 2, [j, j + 1], respuesta);
          document.getElementById('info').innerText = `Paso ${pasoVis}: comparando arr[${j}] < 2*arr[${j + 1}] → ${cumple ? '✓' : '✗'} (${valido}/${k})`;
          await dormir(velocidad);
        }

        if (valido === k) respuesta++;
      }

      document.getElementById('info').innerText = `Total subarreglos válidos (candido): ${respuesta}`;
    }

    async function metodoOptimo() {
      const n = arr.length;
      let valido = 0;
      let respuesta = 0;
      let pasoVis = 0;

      for (let i = 0; i < n - 1; i++) {
        pasoVis++;
        if (arr[i] < 2 * arr[i + 1]) {
          valido++;
        } else {
          valido = 0;
        }

        if (valido >= k) respuesta++;

        dibujarBarras(arr, Math.max(...arr) * 2, [i, i + 1], respuesta);
        document.getElementById('info').innerText = `Paso ${pasoVis}: válidos consecutivos = ${valido} (total válidos: ${respuesta})`;
        await dormir(velocidad);
      }

      document.getElementById('info').innerText = `Total subarreglos válidos (óptimo): ${respuesta}`;
    }

    window.iniciar = (tipo) => {
      const input = document.getElementById('arrInput').value;
      arr = input.split(',').map(Number);
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
        <label>Arreglo (separado por comas):</label>
        <input type="text" id="arrInput" defaultValue="1,2,3,4,5" />
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

export default Visualizer4;
