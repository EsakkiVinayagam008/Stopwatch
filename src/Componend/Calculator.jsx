import React from 'react'


const Calculator = () => {
  document.body.style.background='black'
  document.body.style.fontFamily =  'Platypi, serif';

  

  
  return (
   <>
   
   <div className='mt-24 rounded-2xl' style={{ height: '650px', width: '600px', background: 'black',marginLeft:'750px' }}>
      <input
        
        type="text"
        className='focus:ring text-7xl rounded-full'
        style={{ height: '150px', width: '600px',background:'#161617',color:'whitesmoke' }}
      />
      <h1 className='text-5xl mt-8 ml-64' style={{color:'White'}}>000</h1>
      <div className="grid grid-cols-4 gap-4 mt-8 text-5xl" style={{textAlign:'center'}} >
     
      <button className="1 rounded-full p-4" style={{color:'whitesmoke', background:'#0f0f0f'}}>AC</button>
<button className="2 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}}>C</button>
<button className="3 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}}>%</button>
<button className="4 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}}>/</button>
<button className="5 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>7</button>
<button className="6 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>8</button>
<button className="7 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>9</button>
<button className="8 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}}>*</button>
<button className="9 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>4</button>
<button className="10 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>5</button>
<button className="11 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>6</button>
<button className="12 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}}>-</button>
<button className="13 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>1</button>
<button className="14 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>2</button>
<button className="15 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>3</button>
<button className="16 rounded-full p-4" style={{color:'whitesmoke', background:'#0c0c0d'}}>+</button>
<button className="17 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>00</button>
<button className="18 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>0</button>
<button className="19 rounded-full p-4" style={{color:'whitesmoke', background:'#161617'}}>.</button>
<button className="20 rounded-full p-4" style={{color:'whitesmoke', background:'#f25607'}}>=</button>


</div>
    </div>
  
   
   </>
  )
}

export default Calculator
