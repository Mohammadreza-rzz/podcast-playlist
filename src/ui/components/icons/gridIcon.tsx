import React from "react";

interface IProps {
  classnames?: string;
}

const GridIcon: React.FC<IProps> = ({ classnames }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classnames}
      viewBox="0 0 32 32"
    >
      <path d="M8 15h7v-7h-7v7zM17 8v7h7v-7h-7zM17 24h7v-7h-7v7zM8 24h7v-7h-7v7z"></path>
    </svg>
  );
};

export default GridIcon;
