import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface sideModal {
  isActive: boolean;
}

interface Toast {
  isActive: boolean;
}

interface ModalState {
  sideModal: sideModal;
  toast: Toast;
}

const initialState: ModalState = {
  sideModal: { isActive: false },
  toast: { isActive: false },
};

const ModalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    sideModalOpen(state) {
      state.sideModal.isActive = true;
      state.toast.isActive = false;
    },
    sideModalclose(state) {
      state.sideModal.isActive = false;
      state.toast.isActive = true;
    },
    toastOpen(state) {
      state.toast.isActive = true;
    },
    toastclose(state) {
      state.toast.isActive = false;
    },
  },
});

export const { sideModalOpen, sideModalclose, toastOpen, toastclose } =
  ModalSlice.actions;

export const modalReducer = ModalSlice.reducer;
