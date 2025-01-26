import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorIndexes: [0, 0, 0, 0, 0], 
};

const signalSlice = createSlice({
  name: "signal",
  initialState,
  reducers: {
    updateColorIndex: (state, action) => {
      const { cardIndex, maxIndex } = action.payload;
      const newIndex = state.colorIndexes[cardIndex] < maxIndex
        ? state.colorIndexes[cardIndex] + 1
        : 0; 
      state.colorIndexes[cardIndex] = newIndex;
    },
  },
});

export const { updateColorIndex } = signalSlice.actions;

export default signalSlice.reducer;