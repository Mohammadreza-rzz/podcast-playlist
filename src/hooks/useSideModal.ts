import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { sideModalOpen, sideModalclose, setData } from "@/store/modalsStore";

const useSideModal = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.modals.sideModal.isActive
  );

  const data = useSelector((state: RootState) => state.modals.data);

  const closeModal = () => {
    dispatch(sideModalclose());
  };

  const openModal = () => {
    dispatch(sideModalOpen());
  };

  const setdata = (newdata: {
    title: string;
    by: string;
    srcImage: string;
    isSaved: boolean;
  }) => {
    dispatch(setData(newdata));
  };

  return { closeModal, openModal, isActive, setdata, data };
};

export default useSideModal;
