import { useEffect } from 'react';

const Visualizer7 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let x = 0;
    let k = 0;
    let velocidad = 500;

    function dormir(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    function dibujarBarras(valor, limite, resaltados = []) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxValor = Math.max(valor, limite);
      const ancho = canvas.width / 2;
      const h = (valor / maxValor) * 150;
      const x = 50;
      const y = canvas.height - h;
      ctx.fillStyle = resaltados.includes(0) ? '#f78166' : '#58a6ff';
      ctx.fillRect(x, y, ancho - 2, h);
      ctx.fillStyle = '#c9d1d9';
      ctx.font = '14px "Open Sans"';
      ctx.fillText(valor, x + 4, y - 4);
    }

    function esPrimoHasta(num) {
      if (num < 2) return false;
      for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }

    async function metodoCandido() {
      const numStr = String(x).repeat(k);
      const numUnido = BigInt(numStr);
      let pasoVis = 0;

      const barraBase = Number(numUnido);
      const maxBarra = Math.max(barraBase, 10);

      if (numUnido <= 1n) {
        dibujarBarras(barraBase, maxBarra, []);
        document.getElementById('info').innerText = 'Paso 0: num ≤ 1 → no primo';
        return;
      }

      dibujarBarras(barraBase, maxBarra, []);
      document.getElementById('info').innerText = `Probando si ${numUnido} es primo...`;
      await dormir(velocidad);

      for (let i = 2; i < numUnido; i++) {
        pasoVis++;
        const esDiv = numUnido % BigInt(i) === 0n;

        const barraDiv = i;
        dibujarBarras(barraDiv, maxBarra, [0]);
        document.getElementById('info').innerText = `Paso ${pasoVis}: probando divisor ${i} → ${esDiv ? 'NO primo' : 'sigue'}`;
        await dormir(velocidad);

        if (esDiv) {
          document.getElementById('info').innerText = `Resultado (candido): NO es primo`;
          return;
        }
      }

      document.getElementById('info').innerText = `Resultado (candido): SÍ es primo`;
    }

    async function metodoOptimo() {
      let pasoVis = 0;

      if (x === 1) {
        const esPrimo = k === 2;
        dibujarBarras(1, 3, []);
        document.getElementById('info').innerText = `Paso ${++pasoVis}: x=1 → k debe ser 2 → ${esPrimo ? 'SÍ' : 'NO'} primo`;
        await dormir(velocidad);
        document.getElementById('info').innerText = `Resultado (óptimo): ${esPrimo ? 'SÍ' : 'NO'} es primo`;
        return;
      }

      if (k > 1) {
        dibujarBarras(x, x + 2, []);
        document.getElementById('info').innerText = `Paso ${++pasoVis}: k>1 → NO primo`;
        await dormir(velocidad);
        document.getElementById('info').innerText = `Resultado (óptimo): NO es primo`;
        return;
      }

      const esPrimoX = esPrimoHasta(x);
      dibujarBarras(x, x + 2, []);
      document.getElementById('info').innerText = `Paso ${++pasoVis}: verificando si x=${x} es primo → ${esPrimoX ? 'SÍ' : 'NO'}`;
      await dormir(velocidad);
      document.getElementById('info').innerText = `Resultado (óptimo): ${esPrimoX ? 'SÍ' : 'NO'} es primo`;
    }

    window.iniciar = (tipo) => {
      x = parseInt(document.getElementById('xInput').value);
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
        <label>x:</label>
        <input type="number" id="xInput" defaultValue="2" />
        <label>k:</label>
        <input type="number" id="kInput" defaultValue="3" />
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

export default Visualizer7;
