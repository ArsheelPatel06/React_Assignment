import Mood from "./Mood.jsx";
import { useState } from "react";
import './App.css';

function intialMood(){
  console.log('running...');
  return "Happy";
}
const jsonSongData =[
  {
    id:1,
    title: "The First Song",
    mood:"sad",

  },
  {
    id:2,
    title: "The Second Song",
    mood:"happy",

  }
]

function App(){



  const isLoggedIn = true;

  const [mood,setMood] = useState("Happy");
  // const [mood,setMood] = useState({stateMood: "Happy", intensity: "High"});
  function handleMood(newMood){
    setMood(newMood);
    // setMood(mood.stateMood = newMood);
  }

  const [count, setCount] = useState(()=>{
    console.log("Initial count set to 0");
    return 0;
  });
  

  function handleCount(){
    setCount((prevCount)=> prevCount + 1);
  }

  return (
    <div>
      <p>Hehe</p>
      {/* {isLoggedIn && <Mood mood={mood}/>} */}
      {isLoggedIn ? <Mood mood={mood}/> : <h1>Please log in to see your mood.</h1>}
      <button id="upd-btn" className="upd-btn" onClick={()=>{handleMood("funny")}}>Update</button>
      <p>Count: {count}</p>
      <button onClick={handleCount}>Increment</button>


  <ul>
    {songs.map((song)=>{
      return <li key={song.id}>{song.title}</li>
    })}
  </ul>
 </div>
  )
}
export default App;