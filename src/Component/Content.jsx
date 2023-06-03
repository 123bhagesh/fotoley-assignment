import { Box, Typography } from '@mui/material'
import React from 'react'


export const Content = ({newData}) => {
  return (
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
  )
}
