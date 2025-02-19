import React from "react";

interface IProps {
  classnames?: string;
}

const JumpToStartIcon: React.FC<IProps> = ({ classnames }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames}
      viewBox="0 0 20 20"
    >
      <path d="M14.959 4.571l-7.203 4.949c0 0-0.279 0.201-0.279 0.481s0.279 0.479 0.279 0.479l7.203 4.951c0.572 0.38 1.041 0.099 1.041-0.626v-9.609c0-0.727-0.469-1.008-1.041-0.625zM6 4h-1c-0.553 0-1 0.048-1 0.6v10.8c0 0.552 0.447 0.6 1 0.6h1c0.553 0 1-0.048 1-0.6v-10.8c0-0.552-0.447-0.6-1-0.6z"></path>
    </svg>
  );
};

export default JumpToStartIcon;
