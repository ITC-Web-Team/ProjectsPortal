import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Oppurtunities from './pages/Oppurtunities'
import Projects from './pages/Projects'
import PartOpp from './pages/PartOpp'
import PartProject from './pages/PartProject'

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
            <Route index element={<Oppurtunities />} />
            <Route path="//:id" element={<PartOpp />} />
            <Route path="projects" element={<Projects />} />
            <Route path="partproject" element={<PartProject />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

