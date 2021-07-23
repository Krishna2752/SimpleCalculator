import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [valj,setValj] = useState(0);
  const [vald,setVald] = useState(0);
  const [result,setResult] = useState(0);
  const [opt,setOpt] = useState('plus');

  function calc() {
    if(opt==='plus'){
      setResult(Number(valj)+Number(vald));
    }
    else if(opt==='minus'){
      setResult(valj-vald);
    }
    else if(opt==='mult'){
      setResult(Number(valj)*Number(vald));
    }
    else if(opt==='div'){
      setResult(Number(valj)/Number(vald));
    }
    else if(opt==='pow'){
      setResult(Number(valj)**Number(vald));
    }
    else if(opt==='mod'){
      setResult(Number(valj)%Number(vald));
    }
  }

  function reset() {
    setValj(0);
    setVald(0);
    setResult(0);

  }
 

 
  return (
    <div className="App">
      <h2>Calculator</h2>
      <input type="number" value={valj} onChange={e => setValj(e.target.value)} />
      <select onChange={e => setOpt(e.target.value)}>
        <option value="plus">+</option>
        <option value="minus">-</option>
        <option value="mult">*</option>
        <option value="div">/</option>
        <option value="pow">^</option>
        <option value="mod">%</option>
      </select>
      <input type="number" value={vald} onChange={e => setVald(e.target.value)} />
      <button type="submit" onClick={reset}>CE</button>
      <button type="submit" onClick={calc}>=</button>
      <h3>{result}</h3>


    
    </div>
  );
}

export default App;
