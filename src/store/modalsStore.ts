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
  data: { title: string; by: string; srcImage: string; isSaved: boolean };
}

const initialState: ModalState = {
  sideModal: { isActive: false },
  toast: { isActive: false },
  data: { title: "", by: "", srcImage: "", isSaved: false },
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
    setData(
      state,
      actions: PayloadAction<{
        title: string;
        by: string;
        srcImage: string;
        isSaved: boolean;
      }>
    ) {
      state.data = actions.payload;
    },
  },
});

export const { sideModalOpen, sideModalclose, toastOpen, toastclose, setData } =
  ModalSlice.actions;

export const modalReducer = ModalSlice.reducer;
