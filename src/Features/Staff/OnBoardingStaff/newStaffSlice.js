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
      id: 4,
      name: "Vanshika",
      gender: "Female",
      type: "",
      department: "ICU",
    },
    {
      id: 6,
      name: "Seenu",
      gender: "Female",
      department: "",
    },
    {
      id: 5,
      name: "Divya",
      gender: "Female",
      type: "WatchMan",
      department: "",
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
