import './App.css';
import { useEffect, useState } from 'react';
import image from './woman-two.jpg';

function App() {

const [task, setTask] = useState(" ");

useEffect ( () => {
  getTask();
}, [])

  const getTask = async () => {
    const response = await fetch (`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setTask(data.activity)
  }

  const clicked = () => {
    getTask();
    changeCover();
  }

  const changeCover = () => {
    const bodyImage = document.querySelector('body');
    bodyImage.style.backgroundImage = `url('${image}')`;

    const taskField = document.querySelector('.containerTask');
    taskField.style.display = 'block';
  }


  return (
    <div className="App">
      <div className='container'>
        <h1>Are you bored?
        <br></br>Don't know what to do?</h1>
        <button onClick={clicked}>Click here & get a task</button>
      </div>
      <div className='containerTask'>
        <h3>{task}</h3>
      </div>
    </div>
  );
}

export default App;
