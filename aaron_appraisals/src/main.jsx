// Import global styles and third-party CSS (Bootstrap)
import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'

// Application-wide CSS (resets, utilities)
import './global.css'

// Mount the React application into the DOM element with id `root`.
// `StrictMode` enables additional checks and warnings during development.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
