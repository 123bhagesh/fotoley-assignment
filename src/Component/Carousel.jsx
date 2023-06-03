import { Box } from '@mui/material'
import React from 'react'
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { PlayButton } from './PlayButton';
import { data } from "../Data/data";
import "../App.css"


export const Carousel = ({handleNext, handlePrev, handleStart, play, setIndex, index}) => {
  return (
    <Box
        sx={{
          width: "94%",
          margin: "auto",
          display: "flex",
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
                key={i}
                style={{
                  width: "15%",
                  height: "100px",
                  borderRadius: "6px",
                  objectFit: "cover",
                  border: i == index ? '5px solid #79A1FF' : 'none',
                  cursor:"pointer"
                }}
                src={el.img}
                alt={el.title}
                onClick={()=> setIndex(i)}
              />
            ))}
          </Box>

          <PlayButton
            handleStart={handleStart}
            play={play}
            xs="flex"
            sm="none"
            md="none"
            lg="none"
          />

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
          
        <PlayButton
          handleStart={handleStart}
          play={play}
          xs="none"
          sm="flex"
          md="flex"
          lg="flex"
        />
      </Box>
  )
}
