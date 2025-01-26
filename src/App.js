import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Signal from './Components/Signal/Signal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signal />} />
      </Routes>
    </Router>

  )
}

export default App

// import React, { useState, useEffect } from "react";
// import { Box, Button, Typography, Card, CardContent } from "@mui/material";

// export default function App() {
//      const [currentSignal, setCurrentSignal] = useState("red");

//   const signals = ["red", "yellow", "green"];

//   // Auto-cycle signals
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSignal((prevSignal) => {
//         const currentIndex = signals.indexOf(prevSignal);
//         const nextIndex = (currentIndex + 1) % signals.length;
//         return signals[nextIndex];
//       });
//     }, 3000); // Change signal every 3 seconds
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   // Manual signal change handler
//   const handleSignalChange = (signal) => {
//     setCurrentSignal(signal);
//   };
//   return (
//      <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       bgcolor="#f5f5f5"
//     >
//       <Card
//         sx={{
//           width: 300,
//           padding: 2,
//           boxShadow: 3,
//           borderRadius: 2,
//           textAlign: "center",
//         }}
//       >
//         <CardContent>
//           <Typography variant="h5" gutterBottom>
//             Traffic Signal
//           </Typography>
//           <Box
//             sx={{
//               height: 150,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-around",
//               alignItems: "center",
//               marginY: 2,
//             }}
//           >
//             {signals.map((signal) => (
//               <Box
//                 key={signal}
//                 sx={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: "50%",
//                   backgroundColor:
//                     currentSignal === signal ? signal : "lightgray",
//                 }}
//               />
//             ))}
//           </Box>
//           <Box display="flex" justifyContent="space-around" marginTop={2}>
//             {signals.map((signal) => (
//               <Button
//                 key={signal}
//                 variant="contained"
//                 color="primary"
//                 onClick={() => handleSignalChange(signal)}
//               >
//                 {signal.charAt(0).toUpperCase() + signal.slice(1)}
//               </Button>
//             ))}
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>    
//   )
// }