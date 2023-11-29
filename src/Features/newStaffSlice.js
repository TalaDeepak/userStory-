import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newStaffs: [
    {
      id: 1,
      name: "Ravi",
      gender: "Male",
      type: "Admin",
      department: "Pharmacy",
    },
    {
      id: 2,
      name: "Shiv",
      gender: "Male",
      type: "Admin",
      department: "Billin",
    },
    {
      id: 3,
      name: "Ananya",
      gender: "Female",
      type: "WatchMan",
      department: "ICU",
    },
  ],
};

const newStaffSlice = createSlice({
  name: "newStaffs",
  initialState,
  reducers: {
    addNewStaff: {
      prepare(newStaff) {
        return {
          payload: { id: Math.random() * 10, ...newStaff },
        };
      },
      reducer(state, action) {
        state.newStaffs = [action.payload, ...state.newStaffs];
      },
    },
    deleteStaff(state, action) {
      state.newStaffs = state.newStaffs.filter(
        (staff) => staff.id !== action.payload
      );
    },
    editStaff: {
      prepare(id, staff) {
        return {
          payload: { id, staff },
        };
      },
      reducer(state, action) {
        state.newStaffs = state.newStaffs.map((staff) => {
          if (staff.id === action.payload.id) {
            return { id: staff.id, ...action.payload.staff };
          }
          return staff;
        });
      },
    },
  },
});

export const { addNewStaff, deleteStaff, editStaff } = newStaffSlice.actions;

export default newStaffSlice.reducer;
