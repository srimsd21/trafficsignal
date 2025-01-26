
import { configureStore } from "@reduxjs/toolkit";
import signalReducer from "../Slice/signalSlice";

const store = configureStore({
  reducer: {
    signal: signalReducer,
  },
});

export default store;
