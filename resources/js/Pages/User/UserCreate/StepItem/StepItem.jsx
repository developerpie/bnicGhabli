// StepItem.jsx

import {CheckCircle} from "@phosphor-icons/react";
const StepItem = ({ title, describe, status }) => {

  return (
    <div className="flex gap-1 items-start">
      <CheckCircle className={` ${status === "done" ? "!fill-green-500" : status === "active" ? "!fill-blue-500" : status === "wait" ? "!fill-gray-500" : ""}`} size={20} weight="bold" />
      <div className="grid">
        <h3 className="font-bold">{title}</h3>
        <p className="opacity-60">{describe}</p>
      </div>
    </div>
  );
};

export default StepItem;
