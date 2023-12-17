import React, { FC, ReactNode } from "react";

type ConstraintsProps = {
  children: ReactNode;
};

export const Constraints: FC<ConstraintsProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};
