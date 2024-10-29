import React, {useEffect, useState} from 'react';


import NavBar from './Navbar';
import DashboardAnalytics from './DashBoardAnalytics';
import AccesoDashboard from './AccesoDash';
import SegmentoDashboard from './SegmentacionDash';
import PagVistasDashboard from './PaginasVistasDash';
import PageSpeed from './Rendimiento';
import Home from './Home';
import SeoDash from './seoDashboard';



import appFirebase from './Credenciales-fb';
import {getAuth, signOut} from 'firebase/auth'

import './App.css';
import './styles/sidebar.css';

const auth = getAuth(appFirebase)

const DashPrincipal =() =>{
    const [isAnalyticsMenuOpen, setAnalyticsMenuOpen] = useState(false);
    const [activeModule, setActiveModule] = useState('home');

    const [isMenuOpen, setIsMenuOpen] =useState(false);
    
    useEffect(() => {
      if (activeModule !== 'analytics'){
        setAnalyticsMenuOpen(false);
      }
    }, [activeModule]);

    return (
    <div className='app-container'>
      
    <div className="panel">
    <div className='image-logo'>
        <img src='https://www.trucapitals.com/wp-content/uploads/2022/12/cropped-Logo-Icono-Color12-01.png' alt='logo' width={40} height={40}/>
      </div>
      
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
  
    <li onClick={() => {
      setAnalyticsMenuOpen(!isAnalyticsMenuOpen);
      setActiveModule('home')
      setIsMenuOpen(false);
      }} className='element'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
    </svg>
    Inicio
    </li>
  
    <li onClick={() => setAnalyticsMenuOpen(!isAnalyticsMenuOpen)}  className='element'>
    <div className='menu-item'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
    </svg>
    Analytics 
    </div>
    {isAnalyticsMenuOpen &&(
    <ul className='submenu'>
    <li onClick={() => setActiveModule('totalUsuarios')} className='sub-element'>Total de usuarios</li>
    <li onClick={() => setActiveModule('accesousuarios')} className='sub-element'>Acceso de usuarios</li>
    <li onClick={() => setActiveModule('segmentacion')} className='sub-element'>Segmentación</li>
    <li onClick={() => setActiveModule('paginasVisitadas')} className='sub-element'>Pagínas visitadas</li>
    </ul>
    )}
    </li>
    
    <li onClick={() => setActiveModule('seo')} className='element'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
    </svg>
    SEO
    </li>
    <li onClick={() => setActiveModule('rendimiento')}  className='element'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-speedometer" viewBox="0 0 16 16">
    <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z"/>
    <path fill-rule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"/>
    </svg>
    Rendimiento
    </li>
    
    {/* <li className='element'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
  </svg>
    Perfil
    </li> */}
    
    </ul>
  
      <div className='btn-cont'>
    <button className='bt-logout' onClick={()=>signOut(auth)}>Cerrar sesión</button> 


  
    </div>
    <button className='hamburguer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
        </svg>
    </button>
    </div>
    
    <div className="App">
    
    <NavBar />
  
      {activeModule === 'home' && <Home />}
      {activeModule === 'totalUsuarios' && <DashboardAnalytics />}
      {activeModule === 'accesousuarios' && <AccesoDashboard />}
      {activeModule === 'segmentacion' && <SegmentoDashboard />}
      {activeModule === 'paginasVisitadas' && <PagVistasDashboard />}
      {activeModule === 'seo' && <SeoDash />}
      {activeModule === 'rendimiento' && <PageSpeed websiteUrl={"https://www.trucapitals.com/"} />}
  
    </div>
    </div>
    );
}

export default DashPrincipal;