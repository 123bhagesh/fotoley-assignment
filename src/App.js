import logo from './logo.svg';
import './App.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { Button } from '@mui/base';
import {data} from './Data/data'
import { Box, Container } from '@mui/material';

function App() {

  const [play, setPlay] = useState(false)
  
  const handlePlay=()=>{
    setPlay(!play)
  }
  console.log("DATA",data[0])

  return (
    <div className="App">
      {/* {
        data.map((el)=>(
          <>
            <h2>{el.title}</h2>
            <img style={{width:"640px", height:"420px"}} src={el.img}/>
            <p>{el.description}</p>
          </>
        ))
      } */}
      <Container sx={{display:"flex",justifyContent:"space-between",columnGap:"20px"}}>
        <Box sx={{width:"80%",height:"500px", border:"1px solid black"}}></Box>
        <Box sx={{width:"50%", height:"500px", border:"1px solid black"}}></Box>
      </Container>

    </div>
  );
}

export default App;
