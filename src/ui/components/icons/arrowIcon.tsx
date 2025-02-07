import React from "react";

interface IProps {
  classnames?: string;
}

const ArrowIcon: React.FC<IProps> = ({ classnames }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames}
      viewBox="0 0 24 24"
    >
      <path d="M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"></path>
    </svg>
  );
};

export default ArrowIcon;
