import { useEffect } from 'react';

const Visualizer6 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let casos = [];
    let velocidad = 500;

    function dormir(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dibujarBarras(vec, limite, resaltados = [], maxSuma = 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ancho = canvas.width / vec.length;
      const maxValor = Math.max(...vec, limite);
      vec.forEach((v, i) => {
        const h = (v / maxValor) * 150;
        const x = i * ancho;
        const y = canvas.height - h;
        ctx.fillStyle = resaltados.includes(i) ? '#f78166' : '#58a6ff';
        ctx.fillRect(x, y, ancho - 2, h);
        ctx.fillStyle = '#c9d1d9';
        ctx.font = '12px "Open Sans"';
        ctx.fillText(v, x + 4, y - 4);
      });
    }

    async function metodoCandido() {
      const result = [];
      let pasoVis = 0;

      for (const c of casos) {
        const vec = new Array(c + 1).fill(0);
        vec[0] = 0;

        for (let k = 1; k <= c; k++) {
          let num = k;
          let suma = 0;
          while (num > 0) {
            suma += num % 10;
            num = Math.floor(num / 10);
          }
          vec[k] = suma + vec[k - 1];

          pasoVis++;
          dibujarBarras(vec, Math.max(...vec), [k], vec[k]);
          document.getElementById('info').innerText = `Caso ${c} – paso ${k}: vec[${k}] = ${vec[k]}`;
          await dormir(velocidad);
        }

        result.push(vec[c]);
      }

      document.getElementById('info').innerText = `Resultados (candido): [${result.join(', ')}]`;
    }

    async function metodoOptimo() {
      const maxCase = Math.max(...casos);
      const vec = new Array(maxCase + 1).fill(0);
      vec[0] = 0;

      for (let i = 1; i <= maxCase; i++) {
        let num = i;
        let suma = 0;
        while (num > 0) {
          suma += num % 10;
          num = Math.floor(num / 10);
        }
        vec[i] = suma + vec[i - 1];
      }

      const result = casos.map(c => vec[c]);
      let pasoVis = 0;

      for (const c of casos) {
        pasoVis++;
        const valor = vec[c];
        dibujarBarras([valor], valor, [0], valor);
        document.getElementById('info').innerText = `Caso ${c} – consulta directa: ${valor}`;
        await dormir(velocidad);
      }

      document.getElementById('info').innerText = `Resultados (óptimo): [${result.join(', ')}]`;
    }

    window.iniciar = (tipo) => {
      const input = document.getElementById('casosInput').value;
      casos = input.split(',').map(Number);
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
        <label>Casos (separados por comas):</label>
        <input type="text" id="casosInput" defaultValue="5,12,100" />
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

export default Visualizer6;
