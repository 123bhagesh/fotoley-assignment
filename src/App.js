import logo from './logo.svg';
import './App.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from 'react';
import { Button } from '@mui/base';
import {data} from './Data/data'
import { Box, Container, Typography } from '@mui/material';

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
      {
        data?.map((el,i)=> (
          <Container sx={{display:"flex",justifyContent:"space-between",columnGap:"20px"}}>
            <Box sx={{width:"80%",height:"500px", border:"1px solid black"}}>
               <img style={{width:"680px", height:"430px",borderRadius:"20px"}} src={el.img}/>
            </Box>
            <Box sx={{width:"50%", height:"500px", border:"1px solid black",textAlign:"left",color:'#545454'}}>
            <Typography variant="h4" >
              {el.title}
            </Typography>
            <Typography  >
              {el.description}
            </Typography>
            </Box>
          </Container>
        ))
      }


    </div>
  );
}

export default App;
