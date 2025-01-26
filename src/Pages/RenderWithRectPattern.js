import React from "react";
import { Box } from "@mui/material";

const RenderWithRectPattern = ({ pattern, cardIndex, colorIndexes, lightStyles }) => {
  return (
    <Box sx={{ width: 300, height: 300, borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: 2 ,backgroundColor:"#cccccc", zIndex:"-1" }}>
    <Box sx={{ width: 48, height: 200, backgroundColor: "#000", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: 2, outline: `5px solid ${pattern.lights[colorIndexes[cardIndex]]}` }}>
      <Box display="flex" flexDirection="column" gap={2}>
        {pattern.lights.map((color, lightIndex) => (
          <Box key={lightIndex} sx={lightStyles(lightIndex, color, colorIndexes[cardIndex])} />
        ))}
      </Box>
    </Box>
    <Box sx={{ width: 20, height: 150, borderRadius: "4px", position: "relative", boxShadow: "0px 0px 5px 3px rgb(48, 38, 38)", zIndex: "-1" , backgroundColor:"#fff" }}>
      <Box sx={{ width: 40, height: 40, backgroundColor: pattern.lights[colorIndexes[cardIndex]], borderRadius: "50%", position: "absolute", top: "20px", left: "-10px" }} />
      <Box sx={{ width: 38, height: 38, border: "2px solid black", borderRadius: "50%", position: "absolute", top: "65px", left: "-10px", display: "flex", justifyContent: "center", alignItems: "center", color: "#000", fontSize: "30px", background: "#fff" }}>
        c
      </Box>
    </Box>
  </Box>
  )
}

export default RenderWithRectPattern
