import { Box, Button } from "@mui/material";
import React from "react";
// import "./App.css";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";

export const PlayButton = ({handleStart,play,xs,sm,md,lg}) => {
  return (
      <Box
        sx={{
          width: { xs: "30%", sm: "18%", md: "35%", lg: "35%" },
          height: "120px",
        //   border: "1px solid black",
          alignItems: "center",
          display: { xs: xs, sm: sm, md: md, lg: lg },
          justifyContent: "center",
          margin: "auto",
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
  );
};
