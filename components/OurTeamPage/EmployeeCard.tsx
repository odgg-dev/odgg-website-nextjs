import React from "react";

const EmployeeCard = ({
  data,
  type = "basic",
}: {
  data: any;
  type: "big" | "small" | "basic";
}) => {
  if (type === "basic") {
    return <div>EmployeeCard</div>;
  }
  if (type === "small") {
    return <div>Small</div>;
  }

  if (type === "big") {
    return <div>Big</div>;
  }

  return <></>;
};

export default EmployeeCard;
