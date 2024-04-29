import React, { useState,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faUndo ,faPause,faNotesMedical} from '@fortawesome/free-solid-svg-icons';





const Timmer = () => {
    document.body.style.background = 'black';
    document.body.style.fontFamily =  'Unna, serif';

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    
    const intervalRef = useRef(null);
  
    const startStopwatch = () => {
        if (isRunning) {
          clearInterval(intervalRef.current);
        } else {
          const startTime = Date.now() - time;
          intervalRef.current = setInterval(() => {
            setTime(Date.now() - startTime);
          }, 10);
        }
        setIsRunning(!isRunning);
      };
    
      const resetStopwatch = () => {
        clearInterval(intervalRef.current);
        setTime(0);
        setIsRunning(false);
        setLaps([]); 
    };
    

      const addLap = () => {
        setLaps([...laps, formatTime(time)]);
    };

      const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        const centiseconds = Math.floor((milliseconds % 1000) / 10).toString().padStart(2, '0');
        return `${minutes}:${seconds}.${centiseconds}`;
      };

    
    const circle = {
        height: '500px',
        width: '800px',
        background: '#D1C4E9',
        marginTop:'100px',
        
        color:''
    };
    const but = {
       
        height: '80px',
        background: '#00ffff',
        width: '80px',
        marginLeft:'370px'
      
    };

    const but1 = {
       
        height: '80px',
        background: '#00ffff',
        width: '80px',
        
        marginLeft:'370px'
    };
    
    const but2 = {
        height: '80px',
        background: '#00ffff',
        width: '80px',
        marginLeft:'370px'
    };

    

   


    return (
        <>
          <div className='grid grid-cols-3'>

          <div className='rounded-lg' style={{color:'black', fontSize: '40px',marginTop:'100px',marginLeft:'100px',background:'#D1C4E9',marginRight:'200px'}}>
          <h2 style={{marginLeft:'10px'}}>Laps:</h2>
                <ul style={{marginLeft:'80px'}}>
                    {laps.map((lap, index) => (
                        <li key={index}>{lap}</li>
                    ))}
                </ul>
          </div>

          <div class="col-span-2">

          <div style={circle} className='rounded-lg'>
           
           <h1 style={{ textAlign: 'center',color:'#00ffff' }} className='text-9xl pt-40 font-bold'>{formatTime(time)}</h1>
       </div>
          </div>

          </div>+

          <div className='grid grid-cols-3' style={{marginTop:'150px'}}>
          <div >
          <button style={but1} className='rounded-lg' onClick={addLap}>
                    <FontAwesomeIcon icon={faNotesMedical} style={{ height: '40px', textAlign: 'center', paddingLeft: '3px' }}  />
                </button>
          </div>
          <div >

          <button style={but} className='rounded-lg' onClick={startStopwatch}>
    {isRunning ? (
        <>
            <FontAwesomeIcon icon={faPause} style={{ height: '40px', textAlign: 'center', paddingLeft: '3px' }} />
         
        </>
    ) : (
        <>
            <FontAwesomeIcon icon={faPlay} style={{ height: '40px', textAlign: 'center', paddingLeft: '3px' }} />
         
        </>
    )}
</button>
          </div>
  
         <div>
            
         <button style={but2} className='rounded-lg'  onClick={resetStopwatch}>
                <FontAwesomeIcon icon={faUndo} style={{ height: '40px', textAlign: 'center', paddingLeft: '3px' }} />
            </button>
         </div>

          </div>
                
         
           
        </>
    );
}

export default Timmer;
