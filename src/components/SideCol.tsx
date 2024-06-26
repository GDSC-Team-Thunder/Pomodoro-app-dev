import React, { ReactNode } from "react";

interface SideColProps {
  children: ReactNode;
}

const SideCol: React.FC<SideColProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col h-[95%] p-1 bg-bgColor/10 rounded-[25px] self-center w-[22.5%] justify-between">
      {children}
    </div>
  );
};

export default SideCol;
