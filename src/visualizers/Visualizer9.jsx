import { useEffect } from 'react';

const Visualizer9 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let pilas = [];
    let jugosos = [];
    let velocidad = 500;

    function dormir(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dibujarBarras(pref, limite, resaltados = []) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ancho = canvas.width / pref.length;
      const maxValor = Math.max(...pref, limite);
      pref.forEach((v, i) => {
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
      const n = pilas.length;
      const m = jugosos.length;
      const result = new Array(m);
      let pasoVis = 0;

      const pref = new Array(n);
      pref[0] = pilas[0];
      for (let i = 1; i < n; i++) pref[i] = pref[i - 1] + pilas[i];

      for (let j = 0; j < m; j++) {
        result[j] = -1;
        for (let i = 0; i < n; i++) {
          pasoVis++;
          dibujarBarras(pref, Math.max(...pref) + 1, [i]);
          document.getElementById('info').innerText = `Gusano ${j + 1} (${jugosos[j]}) – pila ${i + 1} = ${pref[i]}`;
          await dormir(velocidad);

          if (jugosos[j] <= pref[i]) {
            result[j] = i + 1;
            break;
          }
        }
      }

      document.getElementById('info').innerText = `Resultados (candido): [${result.join(', ')}]`;
    }

    async function metodoOptimo() {
      const n = pilas.length;
      const m = jugosos.length;
      const pref = new Array(n);
      pref[0] = pilas[0];
      for (let i = 1; i < n; i++) pref[i] = pref[i - 1] + pilas[i];

      const result = new Array(m);
      let pasoVis = 0;

      for (let j = 0; j < m; j++) {
        pasoVis++;
        const g = jugosos[j];

        let izq = 0;
        let der = n - 1;
        let idx = -1;
        while (izq <= der) {
          const mid = Math.floor((izq + der) / 2);
          if (pref[mid] >= g) {
            idx = mid;
            der = mid - 1;
          } else {
            izq = mid + 1;
          }
        }

        result[j] = idx === -1 ? -1 : idx + 1;

        dibujarBarras(pref, Math.max(...pref) + 1, [idx]);
        document.getElementById('info').innerText = `Gusano ${j + 1} (${g}) – binario → pila ${result[j]}`;
        await dormir(velocidad);
      }

      document.getElementById('info').innerText = `Resultados (óptimo): [${result.join(', ')}]`;
    }

    window.iniciar = (tipo) => {
      pilas = document.getElementById('pilasInput').value.split(',').map(Number);
      jugosos = document.getElementById('jugososInput').value.split(',').map(Number);
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
        <label>Pilas (separadas por comas):</label>
        <input type="text" id="pilasInput" defaultValue="1,2,3,4" />
        <label>Gusanos jugosos (separados por comas):</label>
        <input type="text" id="jugososInput" defaultValue="1,3,5,10" />
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

export default Visualizer9;
