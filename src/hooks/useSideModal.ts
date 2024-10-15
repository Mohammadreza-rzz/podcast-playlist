import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { sideModalOpen, sideModalclose } from "@/store/modalsStore";

const useSideModal = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.modals.sideModal.isActive
  );

  const closeModal = () => {
    dispatch(sideModalclose());
  };

  const openModal = () => {
    dispatch(sideModalOpen());
  };

  return { closeModal, openModal, isActive };
};

export default useSideModal;
