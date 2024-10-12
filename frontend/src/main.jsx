import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Layout from './Layout'
import Oppurtunities from './pages/Oppurtunities'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
      <Oppurtunities />
    </Layout>
  </StrictMode>,
)
