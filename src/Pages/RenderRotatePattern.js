import React from "react";
import { Box } from "@mui/material";


const RenderRotatePattern = ({ pattern, cardIndex, colorIndexes, lightStyles }) => {
  return (
    <Box sx={{ width: 300, height: 300, borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: 2 ,backgroundColor:"#cccccc" , zIndex:"-1"}}>
    <Box sx={{ position: "relative", marginTop: "30px" }}>
      <Box sx={{ width: 20, height: 100, backgroundColor: "#000", borderRadius: "4px", transform: "rotate(300deg)", transformOrigin: "center", position: "absolute", top: "-50px", left: "-30px", zIndex: "2" }}>
        {[...Array(4)].map((_, index) => (
          <Box key={index} sx={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", margin: "6px auto" }} />
        ))}
      </Box>
      <Box sx={{ width: 60, height: 60, clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)", background: "#000" }} />
    </Box>
    <Box sx={{ width: 20, height: 200, borderRadius: "4px", position: "relative", boxShadow: "0px 0px 5px 3px rgb(48, 38, 38)", zIndex: "-1" , backgroundColor:"#fff" }}>
      <Box sx={{ width: 48, height: 100, backgroundColor: "#000", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: 2, outline: `5px solid ${pattern.lights[colorIndexes[cardIndex]]}`, position: "absolute", top: 20, left: "-30px" }}>
        <Box display="flex" flexDirection="column" gap={2}>
          {pattern.lights.map((color, lightIndex) => (
            <Box key={lightIndex} sx={lightStyles(lightIndex, color, colorIndexes[cardIndex])} />
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default RenderRotatePattern
