import './App.css';
import React, { useRef, useState, useEffect } from 'react';

const keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
const ids = ['Heater 1', 'Heater 2', 'Heater 3', 'Heater 4', 'Clap', 'Open HH', 'Kick n\' Hat', 'Kick', 'Closed HH'];

function App() {
  // Referencias a los elementos de audio
  const audioRefs = useRef([
    // ... crea más referencias según la cantidad de audios que tengas
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef()
  ]);

  const[idElement, setIdElement] = useState();

  // Función para manejar el clic en el div y reproducir el audio
  const handleDivClick = (index, id) => {
    const currentAudio = audioRefs.current[index].current;
    currentAudio.play();
    setIdElement(id);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Obtener la tecla presionada
      const keyPressed = event.key.toUpperCase();

      // Obtener el elemento de audio asociado a la tecla
      const audioElement = document.getElementById(keyPressed);

      // Verificar si el elemento de audio existe y reproducirlo
      if (audioElement) {
        for (let i = 0; i < keys.length; i++) {
          if (keyPressed === keys[i]) {
            handleDivClick(i, ids[i]);
          }
        }
      }
    };

    // Agregar un event listener para el evento de tecla presionada
    window.addEventListener('keydown', handleKeyDown);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div id='drum-machine' className='row'>
      <h1>Drum Machine</h1>
      <div id='pad-container'>
        <div id='heater-1' className='drum-pad' onClick={() => handleDivClick(0, 'Heater 1')}><audio id='Q' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' ref={audioRefs.current[0]}></audio>Q</div>
        <div id='heater-2' className='drum-pad' onClick={() => handleDivClick(1, 'Heater 2')}><audio id='W' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' ref={audioRefs.current[1]}></audio>W</div>
        <div id='heater-3' className='drum-pad' onClick={() => handleDivClick(2, 'Heater 3')}><audio id='E' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' ref={audioRefs.current[2]}></audio>E</div>
        <div id='heater-4' className='drum-pad' onClick={() => handleDivClick(3, 'Heater 4')}><audio id='A' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' ref={audioRefs.current[3]}></audio>A</div>
        <div id='clap' className='drum-pad' onClick={() => handleDivClick(4, 'Clap')}><audio id='S' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' ref={audioRefs.current[4]}></audio>S</div>
        <div id='open-hh' className='drum-pad' onClick={() => handleDivClick(5, 'Open HH')}><audio id='D' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' ref={audioRefs.current[5]}></audio>D</div>
        <div id='kick-n-hat' className='drum-pad' onClick={() => handleDivClick(6, 'Kick n\' Hat')}><audio id='Z' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' ref={audioRefs.current[6]}></audio>Z</div>
        <div id='kick' className='drum-pad' onClick={() => handleDivClick(7, 'Kick')}><audio id='X' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' ref={audioRefs.current[7]}></audio>X</div>
        <div id='closed-hh' className='drum-pad' onClick={() => handleDivClick(8, 'Closed HH')}><audio id='C' className='clip' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' ref={audioRefs.current[8]}></audio>C</div>
      </div>
      <div id='display'>{idElement}</div>
    </div>
  );
}

export default App;
