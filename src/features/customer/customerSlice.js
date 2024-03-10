import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

const customerReducer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    create: (state, action) => {
      state.fullname = action.payload.fullname;
      state.nationalId = action.payload.nationalId;
      state.createdAt = action.payload.createdAt;
    },
    updateName: (state, action) => {
      state.fullname = action.payload;
    },
  },
});

// const customerReducer = (state = initialStateCustomer, action) => {
//   switch (action.type) {
//     case "customer/create":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullname: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const createCustomer = (fullname, nationalId) => {
//   return {
//     type: "customer/create",
//     payload: {
//       fullname: fullname,
//       nationalId: nationalId,
//       created: new Date().toISOString(),
//     },
//   };
// };

// export const updateName = (name) => {
//   return {
//     type: "customer/updateName",
//     payload: name,
//   };
// };

export const { create, updateName } = customerReducer.actions;

export default customerReducer.reducer;
