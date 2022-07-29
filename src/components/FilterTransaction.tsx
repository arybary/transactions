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
    height: "60px",
    backgroundColor: "grey",
    border: "thick double silver",
    color: "white",
    fontWeight: "bold",
  };

  const styleDefaultFilter = {
    backgroundColor: "green",
    color: "white",
    fontWeight: "bold",
  };
  return (
    <>
      <form onChange={handleSubmit(onSubmit)}>
        <select style={styleFilter} {...register("filterStatus")}>
          <option value="" style={styleDefaultFilter}>
            Filter by Status
          </option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>'Status Completed'
        </select>
        <select style={styleFilter} {...register("filterType")}>
          <option value="" style={styleDefaultFilter}>
            Filter by Type
          </option>
          <option value="Withdrawal">Withdrawal</option>
          <option value="Refill">Refill</option>
        </select>
      </form>
    </>
  );
};

export default FilterTransaction;
