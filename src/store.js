import { configureStore } from "@reduxjs/toolkit";

import staffReducer from "./Features/staffSlice";
import departmentReducer from "./Features/departmentSlice";
import newStaffReducer from  './Features/newStaffSlice'

const store = configureStore({
  reducer: {
    staff: staffReducer,
    department : departmentReducer,
    newStaff : newStaffReducer
  },
});

export default store;
