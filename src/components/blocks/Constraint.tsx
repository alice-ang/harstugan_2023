import { FC, ReactNode } from "react";

type ConstraintProps = {
  children: ReactNode;
};

export const Constraint: FC<ConstraintProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};
