import React from "react";

interface IProps {
  classnames?: string;
}

const SavedIcon: React.FC<IProps> = ({ classnames }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id="save"
      className={classnames}
    >
      <path
        fill="#eee"
        d="M9.09,30a2.33,2.33,0,0,1-.74-.11,3.44,3.44,0,0,1-2.29-3.45V5.56A3.32,3.32,0,0,1,9.06,2H22.94a3.32,3.32,0,0,1,3,3.56V26.44a3.44,3.44,0,0,1-2.29,3.45,2.71,2.71,0,0,1-3.1-1.29L16,21.48,11.45,28.6A2.82,2.82,0,0,1,9.09,30ZM16,18.63a1,1,0,0,1,.84.46l5.39,8.43h0a.79.79,0,0,0,.86.45,1.48,1.48,0,0,0,.85-1.53V5.56c0-.92-.53-1.56-1-1.56H9.06c-.47,0-1,.64-1,1.56V26.44A1.48,1.48,0,0,0,8.91,28a.79.79,0,0,0,.86-.45l5.39-8.43A1,1,0,0,1,16,18.63Z"
      ></path>
    </svg>
  );
};

export default SavedIcon;
