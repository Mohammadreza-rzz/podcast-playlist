import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toastclose, toastOpen } from "@/store/modalsStore";

const useToast = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(
    (state: RootState) => state.modals.toast.isActive
  );

  const closeToast = () => {
    dispatch(toastclose());
  };

  const openToast = () => {
    dispatch(toastOpen());
  };

  return { openToast, closeToast, isActive };
};

export default useToast;
