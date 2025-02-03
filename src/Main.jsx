import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Alli from './Alli'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Alli.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Alli />
  </StrictMode>,
)
