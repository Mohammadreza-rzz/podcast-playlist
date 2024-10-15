import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toastclose, toastOpen, setData } from "@/store/modalsStore";

const useToast = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.modals.toast.isActive
  );
  const data = useSelector((state: RootState) => state.modals.data);
  const closeToast = () => {
    dispatch(toastclose());
  };

  const openToast = () => {
    dispatch(toastOpen());
  };

  const setdata = (newdata: {
    title: string;
    by: string;
    srcImage: string;
    isSaved: boolean;
  }) => {
    dispatch(setData(newdata));
  };

  return { openToast, closeToast, isActive, setdata, data };
};

export default useToast;
