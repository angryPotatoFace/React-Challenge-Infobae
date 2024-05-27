import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.tsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationsPage.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import NotFoundPage from './pages/NotFound.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENTE_ID}>
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
