import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './components/Form.jsx'
// import FormPrint from './components/FormPrint.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Form />
    {/* <FormPrint /> */}
  </React.StrictMode>,
)
