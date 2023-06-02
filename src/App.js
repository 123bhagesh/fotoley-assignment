import logo from './logo.svg';
import './App.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { Button } from '@mui/base';
import {data} from './Data/data'

function App() {

  const [play, setPlay] = useState(false)
  
  const handlePlay=()=>{
    setPlay(!play)
  }
  console.log("DATA",data)

  return (
    <div className="App">

      <Button onClick={handlePlay} style={{border:"none", backgroundColor:"white",cursor:"pointer"}}>
        {
          play ? <PlayCircleIcon style={{ color: "#25beda" , width:"80px",height:"80px"}}/>
          : <PauseCircleFilledIcon style={{ color: "#25beda" , width:"80px",height:"80px"}}/>
        }
      </Button>
      
      <ArrowLeftIcon style={{ width:"100px",height:"100px"}} />
      <ArrowRightIcon style={{ width:"300px",height:"80px"}}/>
    </div>
  );
}

export default App;
