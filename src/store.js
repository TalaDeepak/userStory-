import { configureStore } from "@reduxjs/toolkit";

import staffReducer from "./Features/Staff/StaffType/staffSlice";
import departmentReducer from "./Features/Department/departmentSlice";
import newStaffReducer from "./Features/Staff/OnBoardingStaff/newStaffSlice";

const store = configureStore({
  reducer: {
    staff: staffReducer,
    department: departmentReducer,
    newStaff: newStaffReducer,
  },
});

export default store;
