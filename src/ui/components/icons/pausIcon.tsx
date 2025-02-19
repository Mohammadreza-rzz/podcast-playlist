import React from "react";

interface IProps {
  classnames?: string;
}

const PausIcon: React.FC<IProps> = ({ classnames }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames}
      viewBox="0 0 20 20"
    >
      <path d="M15 3h-2c-0.553 0-1 0.048-1 0.6v12.8c0 0.552 0.447 0.6 1 0.6h2c0.553 0 1-0.048 1-0.6v-12.8c0-0.552-0.447-0.6-1-0.6zM7 3h-2c-0.553 0-1 0.048-1 0.6v12.8c0 0.552 0.447 0.6 1 0.6h2c0.553 0 1-0.048 1-0.6v-12.8c0-0.552-0.447-0.6-1-0.6z"></path>
    </svg>
  );
};

export default PausIcon;
