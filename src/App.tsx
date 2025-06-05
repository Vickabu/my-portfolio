import { ScrollToTop } from './components/common/ScrollToTop';
import { MainLayout } from './components/layout/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import './styles/index.css';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
          </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;