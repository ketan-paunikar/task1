
import { waitFor } from '@testing-library/react';
import { useState } from 'react';
import './App.css';

const App = () => {

  const [width, setWidth] = useState('');
  const [color, setColor] = useState('');


  const onChangeWidth = (e) => {
    e.preventDefault();
    setWidth(e.target.value)
  }

  const onChangeColor = (e) => {
    e.preventDefault();
    setColor(e.target.value);
  }

  const onSubmitWidth = (e) => {
    // alert('A widht was submitted: ' + width);
    e.preventDefault();
  }

  const onSubmitColor = (e) => {
    e.preventDefault();
  }

  console.log(width, "w");
  console.log(color, "c");

  const mystyle = {
    width: width ? width : "unset",
    backgroundColor: color ? color : "unset",
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmitWidth} >
          <input type='text' value={width} onChange={onChangeWidth} placeholder="Enter width" ></input>
          <button type="submit">submit</button>
        </form>
      </div>
      <div>
        <form onSubmit={onSubmitColor} >
          <input type='text' value={color} onChange={onChangeColor} placeholder="Enter color"  ></input>
          <button type="submit">submit</button>
        </form>
      </div>
      <div className='div' style={mystyle}>
      </div>
    </>
  )
}

export default App;