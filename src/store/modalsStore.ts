import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sideModal {
  isActive: boolean;
}

interface ModalState {
  sideModal: sideModal;
}

const initialState: ModalState = {
  sideModal: { isActive: false },
};

const ModalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    sideModalOpen(state) {
      state.sideModal.isActive = true;
    },
    sideModalclose(state) {
      state.sideModal.isActive = false;
    },
  },
});

export const { sideModalOpen, sideModalclose } = ModalSlice.actions;

export const modalReducer = ModalSlice.reducer;
