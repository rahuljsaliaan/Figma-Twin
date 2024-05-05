import { ReactNode } from "react";

type NewThreadProps = {
  children: ReactNode;
};

export const NewThread: React.FC<NewThreadProps> = ({ children }) => {
  return <div>{children}</div>;
};
