import './App.css';
import { useEffect, useState } from 'react';
import image from './woman-one.jpg';
import newImage from './woman-two.jpg';

function App() {

const [task, setTask] = useState("");
const [cover, setCover] = useState(image);
const [showTask, setShowTask] = useState(false);

useEffect ( () => {
  getTask();
}, [])

  const getTask = async () => {
    const response = await fetch (`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setTask(data.activity)
  }

  const backgroundStyle = {
    backgroundImage: `url(${cover})`
  }

  const clicked = () => {
    getTask();
    setCover(newImage);
    setShowTask(true);
  }

  return (
    <div className="App" style={ backgroundStyle }>

      <div className='container'>
        <h1>Are you bored?
        <br></br>Don't know what to do?</h1>
        <button onClick={clicked}>Click here & get a task</button>
      </div>

      <div className={`containerTask ${showTask ? 'visible' : 'hidden'}`}>
        <h3>{task}</h3>
      </div>

    </div>
  );
}

export default App;
