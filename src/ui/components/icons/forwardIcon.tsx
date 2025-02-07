import React from "react";

interface IProps {
  classnames?: string;
}

const ForwardIcon: React.FC<IProps> = ({ classnames }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames}
      viewBox="0 0 20 20"
    >
      <path d="M9.244 9.52l-7.203-4.949c-0.572-0.383-1.041-0.102-1.041 0.625v9.609c0 0.725 0.469 1.006 1.041 0.625l7.203-4.951c0 0 0.279-0.199 0.279-0.478s-0.279-0.481-0.279-0.481zM18.6 10.001c0 0.279-0.279 0.478-0.279 0.478l-7.203 4.951c-0.572 0.381-1.041 0.1-1.041-0.625v-9.609c0-0.727 0.469-1.008 1.041-0.625l7.202 4.949c0 0 0.28 0.201 0.28 0.481z"></path>
    </svg>
  );
};

export default ForwardIcon;
