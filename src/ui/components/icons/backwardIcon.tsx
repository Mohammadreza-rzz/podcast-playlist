import React from "react";

interface IProps {
  classnames?: string;
}

const BackWardIcon: React.FC<IProps> = ({ classnames }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames}
      viewBox="0 0 20 20"
    >
      <path d="M17.959 4.571l-7.203 4.949c0 0-0.279 0.201-0.279 0.481s0.279 0.479 0.279 0.479l7.203 4.951c0.572 0.38 1.041 0.099 1.041-0.626v-9.609c0-0.727-0.469-1.008-1.041-0.625zM8.883 4.571l-7.203 4.949c0 0-0.279 0.201-0.279 0.481s0.279 0.479 0.279 0.479l7.203 4.951c0.572 0.381 1.041 0.1 1.041-0.625v-9.61c0-0.727-0.469-1.008-1.041-0.625z"></path>
    </svg>
  );
};

export default BackWardIcon;
