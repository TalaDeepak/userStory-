import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffTypes: [
    { id: 1, staffName: "Admin" },
    { id: 2, staffName: "WatchMan" },
    { id: 3, staffName: "WardBoy" },
  ],
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    addStaffType: {
      prepare(staffName) {
        return {
          payload: {
            id: Math.random() * 10,
            staffName,
          },
        };
      },
      reducer(state, action) {
        state.staffTypes = [action.payload, ...state.staffTypes];
      },
    },
    deleteStaffType(state, action) {
      state.staffTypes = state.staffTypes.filter(
        (staff) => staff.id !== action.payload.id
      );
    },
    editStaffType: {
      prepare(id, staffTypeName) {
        return {
          payload: { id, staffTypeName },
        };
      },
      reducer(state, action) {
        state.staffTypes = state.staffTypes.map((staff) => {
          if (staff.id === action.payload.id) {
            return { id: staff.id, staffName: action.payload.staffTypeName };
          }
          return staff;
        });
      },
    },
  },
});

export const { addStaffType, deleteStaffType, editStaffType } =
  staffSlice.actions;

export default staffSlice.reducer;
