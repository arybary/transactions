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

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <select {...register("filterStatus")}>
        <option value="">Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>'Status Completed'
      </select>
      <select {...register("filterType")}>
        <option value="">Type</option>
        <option value="Withdrawal">Withdrawal</option>
        <option value="Refill">Refill</option>
      </select>
    </form>
  );
};

export default FilterTransaction;
