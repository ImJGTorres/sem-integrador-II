# Desglosando algoritmos: Correctitud, Completitud y Complejidad

## Descripción del Proyecto

Esta es una aplicación web educativa desarrollada en React para estudiantes de Análisis de Algoritmos. La plataforma presenta una colección de ejercicios de programación con descripciones detalladas, soluciones en código, análisis de complejidad y visualizaciones interactivas. El objetivo es reforzar la comprensión de conceptos fundamentales como la **correctitud**, **completitud** y **complejidad** de los algoritmos.

### Conceptos Básicos

- **Correctitud**: Un algoritmo es correcto si produce la salida esperada para todas las entradas válidas, garantizando que su solución es válida en todos los casos.
- **Completitud**: Un algoritmo es completo si, dado un conjunto de entradas válidas, siempre es capaz de encontrar una solución cuando ésta existe.
- **Complejidad**: Análisis del tiempo y espacio que requiere un algoritmo para ejecutarse, expresado en notación Big O.

## Características Principales

- **9 Ejercicios Interactivos**: Cada ejercicio incluye:
  - Enunciado del problema con entrada y salida esperada.
  - PDF explicativo o video introductorio.
  - Visualización interactiva del algoritmo.
  - Plantilla de código editable en línea (OnlineGDB).
  - Solución completa con código y video explicativo.
  - Enlace a repositorio GitLab con la implementación.
  - Análisis detallado de complejidad temporal y espacial.

- **Ejercicios Disponibles**:
  1. **Hotels Along the Croatian Coast** (Fácil) - Máxima suma de hoteles consecutivos sin exceder un presupuesto.
  2. **Calculating Function** (Fácil) - Cálculo de función alternada para números grandes.
  3. **Favorite Sequence** (Fácil) - Reconstrucción de secuencia escrita en zigzag.
  4. **2^Sort** (Medio) - Conteo de subarreglos ordenados con pesos exponenciales.
  5. **Walk on a multiplication table** (Medio) - Camino mínimo en tabla de multiplicar infinita.
  6. **Vlad and a Sum of Digits** (Medio) - Suma de dígitos de números del 1 al n.
  7. **Simple Repetition** (Difícil) - Verificación de primalidad de números repetidos.
  8. **Diverse Team** (Difícil) - Formación de equipo con calificaciones únicas.
  9. **Worms** (Difícil) - Búsqueda de montón por etiqueta de gusano.

- **Visualizaciones**: Cada ejercicio cuenta con una demostración visual interactiva que ayuda a comprender el funcionamiento del algoritmo.

- **Recursos Educativos**: PDFs con explicaciones paso a paso, análisis de complejidad y código fuente comentado.

## Cómo Usar la Aplicación

### Instalación y Ejecución

1. **Clona el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd sem-integrador-II
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Ejecuta el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y ve a `http://localhost:5173` (o el puerto que indique Vite).

### Navegación por la Aplicación

1. **Página Principal**:
   - Lee la introducción y los conceptos básicos.
   - Explora la lista de ejercicios organizados por dificultad (fácil, medio, difícil).

2. **Página de Ejercicio**:
   - **Enunciado**: Lee la descripción del problema, entrada y salida esperada.
   - **Explicación**: Ve el PDF explicativo o video introductorio.
   - **Visualización**: Interactúa con la demostración visual del algoritmo.
   - **Prueba Tú Mismo**: Haz clic en "Plantilla del ejercicio" para editar y ejecutar código en OnlineGDB.
   - **Solución**: Revisa la solución completa en PDF o video, y accede al código en GitLab.
   - **Complejidad**: Estudia el análisis de complejidad en el PDF correspondiente.
   - **Navegación**: Usa los botones para ir al ejercicio anterior o siguiente.

### Tecnologías Utilizadas

- **Frontend**: React 18 con Vite
- **Enrutamiento**: React Router DOM
- **Estilos**: Bootstrap 5 y CSS personalizado
- **Visualizaciones**: Componentes React personalizados
- **Recursos**: PDFs embebidos, videos de YouTube, enlaces externos

### Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables (Navbar, Footer, Layout)
├── pages/              # Páginas principales (Home, Exercise)
├── visualizers/        # Componentes de visualización para cada ejercicio
├── data.js             # Datos de los ejercicios
└── assets/             # Recursos estáticos

public/
├── imagenes/           # Iconos y imágenes
└── Ejercicios/PDF/     # Documentos PDF de explicaciones y soluciones
```

## Equipo
 - Jesús Gabriel Torres Daza
 - Emerson Amir Vera Gonzalez
 - Johan Steven Bueno Rojas
 - Kevin David Arias Villamizar




## Licencia

Este proyecto es educativo y está destinado para uso académico.
