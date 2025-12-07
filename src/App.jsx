import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Exercise from './pages/Exercise';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ejercicio/:id" element={<Exercise />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
