import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContractProvider } from './context/ContractContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContractProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ContractProvider>
  
)
