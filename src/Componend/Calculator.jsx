import React, { useState } from 'react'
import * as math from 'mathjs';

const Calculator = () => {
  document.body.style.background='black'
  document.body.style.fontFamily =  'Platypi, serif';
  const [inputValue, setInputValue] = useState('');
  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

   const handleClear = () => {
    setInputValue('');
  };

  const handleEqual = () => {
    try {
   
      setInputValue(eval(inputValue).toString());
    } catch (error) {
     
      setInputValue('Error');
    }
  };

  
  return (
   <>
   
   <div className='mt-24 rounded-2xl' style={{ height: '650px', width: '600px', background: 'black',marginLeft:'750px' }}>
      <input
         value={inputValue}
        type="text"
        className='focus:ring text-7xl rounded-lg'
        style={{ height: '150px', width: '600px',background:'#161617',color:'whitesmoke',textAlign:'right' }}
      />
    
      <div className="grid grid-cols-4 gap-4 mt-12 text-5xl" style={{textAlign:'center'}} >
     
      <button className="1 rounded-full p-4" style={{color:'whitesmoke', background:'#0f0f0f'}} onClick={()=>handleClear()}>AC</button>
      <button className="2 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}}  onClick={() => setInputValue(inputValue.slice(0, -1))}>C</button>
      <button className="3 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}} onClick={() => handleButtonClick('%')}>%</button>
      <button className="4 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d' }} onClick={() => handleButtonClick('/')}>/</button>
      <button className="5 rounded-full p-4" style={{color:'whitesmoke', background:'#161617' }} onClick={() => handleButtonClick('7')}>7</button>
      <button className="6 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('8')}>8</button>
       <button className="7 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('9')}>9</button>
      <button className="8 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}} onClick={() => handleButtonClick('*')}>*</button>
      <button className="9 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('4')}>4</button>
      <button className="10 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('5')}>5</button>
      <button className="11 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}  onClick={() => handleButtonClick('6')}>6</button>
      <button className="12 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}} onClick={() => handleButtonClick('-')}>-</button>
      <button className="13 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('1')}>1</button>
      <button className="14 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('2')}>2</button>
     <button className="15 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('3')}>3</button>
     <button className="16 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}} onClick={() => handleButtonClick('+')}>+</button>
    <button className="17 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('00')}>00</button>
    <button className="18 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('0')}>0</button>
    <button className="19 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}} onClick={() => handleButtonClick('.')}>.</button>
    <button className="20 rounded-full p-4" style={{color:'whitesmoke', background:'#f25607'}} onClick={() => handleEqual()}>=</button>
</div>
    </div>
   </>
  )
}

export default Calculator
