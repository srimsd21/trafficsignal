import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateColorIndex } from "../../Service/Slice/signalSlice";
import SignalModal from "../../Util/Model/SignalModal";
import RenderPattern from "../../Pages/RenderPattern";
import RenderWithRectPattern from "../../Pages/RenderWithRectPattern";
import RenderRotatePattern from "../../Pages/RenderRotatePattern";

const Signal = () => {
  const dispatch = useDispatch();

  const cardPatterns = [
    { key: "signal-0", lights: ["green", "yellow", "red", "white"], type: "default" },
    { key: "signal-1", lights: ["green", "yellow", "red"], type: "default" },
    { key: "signal-2", lights: ["green", "yellow"], type: "default" },
    { key: "signal-3", lights: ["green", "yellow", "red"], type: "with-rect" },
    { key: "signal-4", lights: ["green", "red"], type: "rotate" },
  ];

  const colorIndexes = useSelector((state) => state.signal.colorIndexes);

  const [open, setOpen] = useState(false);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [activatedColor, setActivatedColor] = useState(""); 
  const [activatedIndex, setActivatedIndex] = useState(""); 

  const handleOpen = (pattern, cardIndex) => {
    if (selectedPattern?.key !== pattern.key) {
      setSelectedPattern(pattern);
      setActivatedIndex(cardIndex)
    }

    const activeIndex = colorIndexes[cardIndex] ?? 0;
    const color = pattern.lights[activeIndex] || "lightgray"; 
    setActivatedColor(color);

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      cardPatterns.forEach((pattern, cardIndex) => {
        const maxIndex = pattern.lights.length - 1;
        dispatch(updateColorIndex({ cardIndex, maxIndex }));
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [dispatch, cardPatterns]);

  const lightStyles = (lightIndex, color, colorIndex) => ({
    width: 40,
    height: 40,
    backgroundColor: lightIndex === colorIndex ? color : "#908b8b",
    borderRadius: "50%",
    transition: "background-color 0.5s ease",
  });

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={4} mt={4} justifyContent="center" margin="50px 0">
      <Box display="flex" gap={15} justifyContent="center" flexWrap="wrap">
        {cardPatterns.map((pattern, cardIndex) => (
          <Box key={cardIndex} display="flex" flexDirection="column" alignItems="center" className="hello" onClick={() => handleOpen(pattern, cardIndex)}>
            {pattern.type === "default" && <RenderPattern pattern={pattern} cardIndex={cardIndex} colorIndexes={colorIndexes} lightStyles={lightStyles} />}
            {pattern.type === "with-rect" && <RenderWithRectPattern pattern={pattern} cardIndex={cardIndex} colorIndexes={colorIndexes} lightStyles={lightStyles} />}
            {pattern.type === "rotate" && <RenderRotatePattern pattern={pattern} cardIndex={cardIndex} colorIndexes={colorIndexes} lightStyles={lightStyles} />}
          </Box>
        ))}
      </Box>

      {open && 
        <SignalModal open={open} handleClose={handleClose} selectedPattern={selectedPattern} activatedColor={activatedColor} activatedIndex={activatedIndex}/>
      }
    </Box>
  );
};

export default Signal;
