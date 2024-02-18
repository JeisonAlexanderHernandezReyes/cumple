import React, { useState, useEffect } from 'react';
import logo from './penguin.svg';
import './App.css';

function App() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const messageParts = [
    '¡Feliz cumpleaños, Amenitti! 🎉 Celebrar tu día es celebrar el haber conocido a una persona tan maravillosa como tú. Ha sido un verdadero placer y cada día valoro más nuestra amistad.',
    'Me has demostrado que la distancia no es una barrera para una amistad sincera y fuerte. Con cada conversación, con cada risa compartida, me has enseñado que la amistad verdadera no conoce fronteras.',
    'Y en este nuevo año de vida, mi mayor deseo es que todo lo que te propongas se cumpla. No hay duda de que lograrás todo.',
    'Con cada nuevo día, espero que nuestra amistad siga creciendo. Sé que el futuro te tiene reservadas muchas alegrías y estoy emocionado por ser testigo de ello.',
    'Que este cumpleaños te encuentre rodeada de amor, lleno de alegría y sea el comienzo de éxitos tras éxitos. ¡Vamos a brindar por ti, por nuestra amistad y por todo lo hermoso que está por venir!',
    '¡Feliz cumpleaños, Amenitti! 🎂🎈Tqm <3',
    'Att: El joven sabroso shelby xd '

  ];

  useEffect(() => {
    // Simula la carga y luego establece que la carga está completa.
    const loadingTimer = setTimeout(() => {
      setIsLoaded(true);
      // Inicia la secuencia de mensajes solo después de que la barra de carga se haya completado.
      setCurrentMessageIndex(1);
    }, 5000); // Este valor debe coincidir con la duración de la animación de la barra de carga.

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    let messageTimer;
    if (isLoaded && currentMessageIndex < messageParts.length) {
      // Ajusta el tiempo de espera para cada mensaje.
      const delay = currentMessageIndex === 0 ? 0 : 2000; // 2 segundos entre mensajes, después del primero.
      messageTimer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }, delay);
    }

    return () => clearTimeout(messageTimer);
  }, [isLoaded, currentMessageIndex, messageParts.length]);

  return (
    <main>
      <h1 id="title">Cargando Tarjeta de Cumpleaños</h1>
      <div>
        <img id="me" src={logo} alt="Logo" />
      </div>
      <div className="box">
        <div className={isLoaded ? "loading-box finished" : "loading-box"}></div>
      </div>
      <h3 id="state-message">{isLoaded ? 'Carga Completa 🎊' : 'Cargando...'}</h3>
      <div id="result" style={{ whiteSpace: 'pre-wrap' }}>
        {isLoaded && messageParts.slice(0, currentMessageIndex).join('\n')}
      </div>
    </main>
  );
}

export default App;
