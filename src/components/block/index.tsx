import React from 'react';

import "./style.scss";

type TBlock = {
  children: JSX.Element;
  className?: string;
};

const Block: React.FC<TBlock> = ({ children, className }) => (
  <div className={`block ${className}`}>{children}</div>
);

export default Block;