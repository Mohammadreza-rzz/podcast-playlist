import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./modalsStore";
// import { userReducer } from "./userSlice"; // Import your user slice

const store = configureStore({
  reducer: {
    modals: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
