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
import { makeStyles, useTheme } from "@mui/styles";

function App() {
  const [play, setPlay] = useState(false);
  const [newData, setNewData] = useState([]);
  const [index, setIndex] = useState(0);

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleNext = () => {
    setIndex((prev) => (index === data.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setIndex((prev) => (index === 0 ? data.length - 1 : prev - 1));
  };
  const handleStart = () => {
    setPlay(!play);
  };
  useEffect(() => {
    setNewData(data[index]);
    let timer;
    if (play) {
      timer = setInterval(handleNext, 4000);
    }
    return () => clearInterval(timer);
  }, [handleNext, data, index]);
  // console.log("NEWData", newData);

  return (
    <div className="App">
      <Box
        sx={{
          width: "94%",
          margin: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "space-between",
          columnGap: "20px",
          mt: "30px",
        }}
      >
        <Box
          sx={{
            width: { xs: "column", sm: "100%", md: "70%", lg: "70%" },
            height: { xs: "100%", sm: "100%", md: "100%", lg: "520px" },
            // border: "1px solid red",
          }}
        >
          <img className="image" src={newData.img} />
        </Box>
        <Box
          sx={{
            width: { sm: "100%", md: "35%", lg: "35%" },
            height: { sm: "100%", md: "505px", lg: "520px" },
            textAlign: "left",
            color: "#545454",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // border: "1px solid black",
          }}
        >
          <Typography variant="h4">{newData.title}</Typography>
          <Typography
            sx={{
              mt: "16px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "15px",
              // display: "-webkit-box",
            }}
          >
            {newData.description}
          </Typography>
        </Box>
      </Box>
      {/* ----------------------------------------------------------------------- */}
      <Box
        sx={{
          width: "94%",
          margin: "auto",
          display: "flex",
          // flexDirection: { xs: "column", sm: "column", md: "ro", lg: "row" },
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "space-between",
            lg: "space-between",
          },
          columnGap: "20px",
          margin: "auto",
          // border: "1px solid blue",
        }}
      >
        <Box
          sx={{
            width: { xs: "50%", sm: "80%", md: "70%", lg: "70%" },
            height: "120px",
            columnGap: "3px",
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "space-between",
              lg: "space-between",
            },
            alignItems: "center",
            // border: "1px solid red",
          }}
        >
          <ArrowLeftIcon
            style={{
              width: "60px",
              height: "90px",
              cursor: "pointer",
              // border: "1px solid red",
            }}
            onClick={handlePrev}
          />

          <Box
            sx={{
              display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
              justifyContent: {
                xs: "center",
                sm: "center",
                md: "space-between",
                lg: "space-between",
              },
              columnGap: "8px",
            }}
          >
            {data?.map((el, i) => (
              <img
                style={{
                  width: "15%",
                  height: "100px",
                  borderRadius: "6px",
                  objectFit: "cover",
                }}
                src={el.img}
              />
            ))}
          </Box>
          <Box
          sx={{
            width: { sm: "100%", md: "35%", lg: "35%" },
            height: "120px",
            // border: "1px solid black",
            alignItems: "center",
            display: { xs: "flex", sm: "none", md: "none", lg: "none" },
            justifyContent:"center",
          }}
        >
          <Button
            onClick={handleStart}
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            {play ? (
              <PauseCircleFilledIcon
                style={{ color: "#25beda", width: "90px", height: "90px" }}
              />
            ) : (
              <PlayCircleIcon
                style={{ color: "#25beda", width: "90px", height: "90px" }}
              />
            )}
          </Button>
        </Box>
          <ArrowRightIcon
            style={{
              width: "60px",
              height: "90px",
              cursor: "pointer",
              // border: "1px solid red",
            }}
            onClick={handleNext}
          />
        </Box>
        <Box
          sx={{
            width: { xs:"30%",sm: "18%", md: "35%", lg: "35%" },
            height: "120px",
            // border: "1px solid black",
            alignItems: "center",
            display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
            justifyContent: "center",
            margin:"auto"
          }}
        >
          <Button
            onClick={handleStart}
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            {play ? (
              <PauseCircleFilledIcon
                style={{ color: "#25beda", width: "90px", height: "90px" }}
              />
            ) : (
              <PlayCircleIcon
                style={{ color: "#25beda", width: "90px", height: "90px" }}
              />
            )}
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;
