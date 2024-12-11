import React, { useState, useEffect } from 'react';
import './styles/rendimiento.css';
import Image from './assets/ing.png';

function PageSpeedResult({ websiteUrl }) {
  //variables de estado
  const [loading, setLoading] = useState(true); //indica si los datos se estan cargando
  const [result, setResult] = useState(null); //almacena los datos de la api al obtenerlos
  const apiKey = 'AIzaSyCBcOZ4dY8VlvbHDy3NgWkKm5hHF5_yYuo'; // Reemplaza con tu clave real

  const [expandedMetric, setExpandedMetric] = useState(null); //estado para mostrar datos de las metricas
  const toggleMetric = (metric) => { //expande la metrica especifica al seleccionarse, al seleccionar otra se contrae
    setExpandedMetric(expandedMetric === metric ? null : metric);
  };

  //obtencion de datos de la api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(websiteUrl)}&key=${apiKey}`
        );

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error('Error fetching PageSpeed data:', error);
        setResult(null); // Asigna null en caso de error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [websiteUrl]);

  //si loading es verdadero muestra mensaje de espera
  if (loading) {
    return <div className='loading'>Espera un momento...</div>;
  }
//Si no hay repsuesta muestra mensaja de error
  if (!result || !result.lighthouseResult || !result.lighthouseResult.categories || !result.lighthouseResult.audits)  {
    return <div>Error al obtener datos o datos no disponibles</div>;
  }

  const lighthouse = result.lighthouseResult;

   // Métricas de rendimiento - obtención
   const firstContentfulPaint = lighthouse.audits['first-contentful-paint'].displayValue;
   const speedIndex = lighthouse.audits['speed-index'].displayValue;
   const largestContentfulPaint = lighthouse.audits['largest-contentful-paint'].displayValue;
   const interactive = lighthouse.audits['interactive'].displayValue;
   const totalBlockingTime = lighthouse.audits['total-blocking-time'].displayValue;
   const cumulativeLayoutShift = lighthouse.audits['cumulative-layout-shift'].displayValue;
  
  //renderizado
  return (
    <div className='rendimiento'>
     
      <div className='speed-grid'>
        <div>
      <p className='puntuacion-rend'> <span className='valor'>{(lighthouse.categories.performance.score * 100).toFixed(0)}</span>
      <br></br>
      <br></br>
      <br></br> Rendimiento <br></br> <span className='line2'>Los valores son estimados y pueden variar.</span></p>
      </div>

      <div className='website'>
      <h2><a href="https://www.trucapitals.com/" target='blank'>{websiteUrl}</a></h2>
      <a href="https://www.trucapitals.com/" target='blank'><img src={Image} alt='web trucapitals' className='imagen-web' /></a>
      </div>
      </div>
      
      
    <div className='metricas'>
      <h3>MÉTRICAS</h3>
      <div className='metricas-grid'>

        
      <p onClick={() => toggleMetric('FCP')}>
        First Contentful Paint (FCP) <span className='arrow-down'>▼</span><br></br>
        <span className='mtrica-num'>{firstContentfulPaint}</span>
        {expandedMetric === 'FCP' && (
          <div className='expanded-details'>
              El primer procesamiento de imagen con contenido indica el momento en el que se visualiza en la pantalla el primer texto o imagen.
          </div>
        )}
        </p>

      <p onClick={() => toggleMetric('SI')}>
        Speed Index (SI) <span className='arrow-down'>▼</span><br></br> 
        <span className='mtrica-num'>{speedIndex}</span>
        {expandedMetric === 'SI' && (
          <div className='expanded-details'>
            El Índice de velocidad indica la rapidez con la que se puede ver el contenido de una página.
          </div>
        )}
        </p>

      <p onClick={() => toggleMetric('LCP')}>
        Largest Contentful Paint (LCP) <span className='arrow-down'>▼</span><br></br> 
        <span className='mtrica-num'>{largestContentfulPaint}</span>
        {expandedMetric === 'LCP' && (
          <div className='expanded-details'>
            La métrica Procesamiento de imagen con contenido más grande indica el momento en que se pinta el texto o la imagen más grandes. 
          </div>
        )}
        </p>

      <p onClick={() => toggleMetric('TTI')}>
        Time to Interactive (TTI) <span className='arrow-down'>▼</span><br></br> 
        <span className='mtrica-num'>{interactive}</span>
        {expandedMetric === 'TTI' && (
          <div className='expanded-details'>
            El Time to Interactive indica la rapidez con la que una página web se vuelve usable y receptiva.
          </div>
        )}
        </p>

      <p onClick={() => toggleMetric ('TBT')}>
        Total Blocking Time (TBT) <span className='arrow-down'>▼</span><br></br> 
        <span className='mtrica-num'>{totalBlockingTime}</span>
        {expandedMetric === 'TBT' && (
          <div className='expanded-details'>
            Suma todos los períodos entre FCP y el Tiempo de carga, cuando la tarea tarda más de 50 ms. El resultado se expresa en milisegundos.
          </div>
        )}
        </p>

      <p onClick={() => toggleMetric ('CLS')}>
        Cumulative Layout Shift (CLS) <span className='arrow-down'>▼</span><br></br> 
        <span className='mtrica-num'>{cumulativeLayoutShift}</span>
        {expandedMetric === 'CLS' && (
          <div className='expanded-details'>
            El Cambio de diseño acumulado mide el movimiento de los elementos visibles dentro del viewport.
          </div>
        )}
        </p>

      </div>

    </div>
    </div>
  );
}

export default PageSpeedResult;
