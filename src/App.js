import logo from "./logo.svg";
import "./App.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useEffect, useState } from "react";
import { Button } from "@mui/base";
import { data } from "./Data/data";
import { Box, Container, Typography } from "@mui/material";

function App() {
  const [play, setPlay] = useState(false);
  const [newData, setNewData] = useState([]);
  const [count, setCount] = useState(0);

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleNext=()=>{
     setCount(prev=> prev+1)
    if(count==data.length-1){
      setCount(0)
    }
  }
  const handlePrev=()=>{
    setCount(prev=> prev+1)
    if(count==0){
      setCount(data.length-1)
    }
  }

  useEffect(() => {
    setNewData(data[count]);
  }, [data,count]);

  console.log("NEWData", newData);
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

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "20px",
        }}
      >
        <Box sx={{ width: "80%", height: "560px", border: "1px solid black" }}>
          <img
            style={{ width: "750px", height: "430px", borderRadius: "26px" }}
            src={newData.img}
          />
          <Box sx={{ columnGap: "5px",display:'flex',justifyContent:'space-between',mt:"20px" }}>
            <ArrowLeftIcon style={{ width: "70px", height: "90px",border:"1px solid red" }} onClick={handleNext} />

            <Box sx={{display:"flex", columnGap:"8px"}}>
              {data?.map((el, i) => (
                <img
                  style={{ width: "120px", height: "96px", borderRadius: "6px" }}
                  src={el.img}
                />
              ))}
            </Box>
            <ArrowRightIcon style={{ width: "70px", height: "90px",border:"1px solid red"  }} onClick={handlePrev} />
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "500px",
            border: "1px solid black",
            textAlign: "left",
            color: "#545454",
          }}
        >
          <Typography variant="h4">{newData.title}</Typography>
          <Typography>{newData.description}</Typography>
        </Box>
      </Container>
    </div>
  );
}

export default App;
