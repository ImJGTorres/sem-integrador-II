import { useEffect } from 'react';

const Visualizer1 = () => {
  useEffect(() => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let hoteles = [];
    let dinero = 0;
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
      let max = 0;
      const n = hoteles.length;

      for (let i = 0; i < n; i++) {
        let suma = hoteles[i];

        for (let j = i; j < n; j++) {
          if (j !== i) suma += hoteles[j];

          dibujarBarras(ctx, hoteles, dinero, Array.from({ length: j - i + 1 }, (_, k) => i + k), max);
          document.getElementById('info').innerText = `Evaluando subarreglo [${i}..${j}] = ${suma}`;
          await dormir(velocidad);

          if (suma <= dinero && suma > max) {
            max = suma;
          }
        }
      }

      document.getElementById('info').innerText = `Máximo gasto posible: ${max}`;
    }

    async function metodoOptimo() {
      let izq = 0, der = 0, suma = 0, max = 0;
      const n = hoteles.length;

      while (der < n) {
        if (suma + hoteles[der] <= dinero) {
          suma += hoteles[der];
          if (suma > max) max = suma;
          der++;
        } else {
          suma -= hoteles[izq];
          izq++;
        }

        const resaltados = [];
        for (let i = izq; i < der; i++) resaltados.push(i);
        dibujarBarras(ctx, hoteles, dinero, resaltados, max);
        document.getElementById('info').innerText = `Ventana [${izq}..${der - 1}] = ${suma}`;
        await dormir(velocidad);
      }

      document.getElementById('info').innerText = `Máximo gasto posible: ${max}`;
    }

    function iniciar(metodo) {
      const inputHoteles = document.getElementById('hotelesInput').value;
      const inputDinero = parseInt(document.getElementById('dineroInput').value);
      velocidad = parseInt(document.getElementById('velocidad').value);

      hoteles = inputHoteles.split(',').map(v => parseInt(v.trim()));
      dinero = inputDinero;

      if (metodo === 'candido') {
        metodoCandido();
      } else if (metodo === 'optimo') {
        metodoOptimo();
      }
    }

    window.iniciar = iniciar;

    return () => {
      delete window.iniciar;
    };
  }, []);

  return (
    <>
      <div className="controls">
        <label>Precios de hoteles (separados por coma):</label>
        <input type="text" id="hotelesInput" defaultValue="3,1,4,2,5" />
        <label>Presupuesto:</label>
        <input type="number" id="dineroInput" defaultValue="7" />
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

export default Visualizer1;
