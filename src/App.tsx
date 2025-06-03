
import { MainLayout } from './components/layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProjectDetails } from './pages/ProjectDetails';
import './styles/index.css';


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;