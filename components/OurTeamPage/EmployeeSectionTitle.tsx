import React from "react";

export const EmployeeSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative flex justify-center items-center before:left-0  before:top-1/2 before:z-[-10] before:absolute before:h-[1px] before:w-full before:bg-primary-100">
      <h2 className="bg-white w-fit px-4 font-display  text-primary font-normal z-10 uppercase text-headingM">
        {children}
      </h2>
    </div>
  );
};
