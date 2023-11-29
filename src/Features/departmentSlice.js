import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departments: [
    {
      id: 1,
      departmentName: "Billing",
    },
    {
      id: 2,
      departmentName: "ICU",
    },
    {
      id: 3,
      departmentName: "Pharmacy",
    },
  ],
};

const departmentSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {
    addDepartmentType: {
      prepare(departmentName) {
        return {
          payload: {
            id: Math.random() * 10,
            departmentName,
          },
        };
      },
      reducer(state, action) {
        state.departments = [action.payload, ...state.departments];
      },
    },

    deleteDepartmentType(state, action) {
      state.departments = state.departments.filter(
        (dep) => dep.id !== action.payload.id
      );
    },

    editDepartmentType: {
      prepare(id, departmentTypeName) {
        return {
          payload: { id, departmentTypeName },
        };
      },
      reducer(state, action) {
        state.departments = state.departments.map((dep) => {
          if (dep.id === action.payload.id) {
            return {
              id: dep.id,
              departmentName: action.payload.departmentTypeName,
            };
          }
          return dep;
        });
      },
    },
  },
});

export const { addDepartmentType, deleteDepartmentType, editDepartmentType } =
  departmentSlice.actions;

export default departmentSlice.reducer;
