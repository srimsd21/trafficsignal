import React from "react";
import { Box } from "@mui/material";

const RenderPattern = ({ pattern, cardIndex, colorIndexes, lightStyles }) => {

  return (
    <Box sx={{ width: 300, height: 300, borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: 2 , backgroundColor:"#cccccc"}}>
      <Box sx={{ width: 48,  backgroundColor: "#000", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-around", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", padding: 2, outline: `5px solid ${pattern.lights[colorIndexes[cardIndex]]}` }}>
        <Box display="flex" flexDirection="column" gap={2}>
          {pattern.lights.map((color, lightIndex) => (
            <Box key={lightIndex} sx={lightStyles(lightIndex, color, colorIndexes[cardIndex])} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RenderPattern;
