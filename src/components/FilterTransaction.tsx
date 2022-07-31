/** @format */

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useActions } from "../store/useActions";

interface IFormInput {
  filterStatus: String;
  filterType: String;
}

const FilterTransaction: React.FC = () => {
  const { filterTransaction } = useActions();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    const { filterStatus, filterType } = data;
    filterTransaction(filterStatus, filterType);
  };
  const styleFilter = {
    height: "40px",
    backgroundColor: "silver",   
    fontWeight: "bold",
  };

  const styleNameFilter = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
    margin:"5px",
    padding:"10px",
    border: "thick double white",
  };
  return (
    <>
      <form onChange={handleSubmit(onSubmit)}>
        <label style={styleNameFilter}> Filter by Status:</label>
        <select style={styleFilter} {...register("filterStatus")}>
          <option value="">none</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>'Status Completed'
        </select>
        <label style={styleNameFilter}> Filter by Type:</label>
        <select style={styleFilter} {...register("filterType")}>
          <option value="">none</option>
          <option value="Withdrawal">Withdrawal</option>
          <option value="Refill">Refill</option>
        </select>
      </form>
    </>
  );
};

export default FilterTransaction;
