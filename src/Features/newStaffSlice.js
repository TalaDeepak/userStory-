import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newStaffs: [],
};

const newStaffSlice = createSlice({
  name: "newStaffs",
  initialState,
  reducers: {
    addNewStaff(state, action) {
      state.newStaffs = [action.payload , ...state.newStaffs];
    },
  },
});

export const { addNewStaff } = newStaffSlice.actions;

export default newStaffSlice.reducer;
