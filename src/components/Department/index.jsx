import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BackArrowIcon from "../images/back-arrow.svg";
import DepartmentTable from "./DepartmentTable";

function Department() {
  return (
    <div className="flex flex-column gap-2 items-center">
      <PageHeader title="Department" />

      <div className="flex flex-column gap-2 w-100 shadow-md rounded-md">
        <DepartmentTable />
      </div>
    </div>
  );
}

function PageHeader({ title }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center w-100 mb-4">
      <p className="m-0 p-0 text-[20px] font-medium">{title}</p>
      <Link
        className="p-2 bg-[#EAECEB]"
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
      >
        <img
          src={BackArrowIcon}
          alt="back arrow"
          className="h-[15px] w-[100%]"
        />
      </Link>
    </div>
  );
}

export default Department;
