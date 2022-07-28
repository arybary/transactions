/** @format */

import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useActions } from "../store/useActions";

interface IFormInput {
  filter: { filterColum: String; filterColumName: String };
}

const FilterTransaction: React.FC = () => {
  const { filterTransaction } = useActions();
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    const { filterColum, filterColumName } = JSON.parse(data.filter);
   console.log(filterColum, filterColumName)
    filterTransaction(filterColum, filterColumName);
  };

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <span>Filter by </span>
      <select {...register("filter")}>
        <option value='{"filterColum":"","filterColumName":""}'>Status</option>
        <option value='{"filterColum":"Status","filterColumName":"Pending"}'>
          Pending
        </option>
        <option value='{"filterColum":"Status","filterColumName":"Completed"}'>
          Completed
        </option>
        <option value='{"filterColum":"Type","filterColumName":" Refill"}'>
          Cancelled
        </option>
      </select>
      <select >
        <option value='{"filterColum":"","filterColumName":""}'>Type</option>
        <option value='{"filterColum":"Type","filterColumName":"Withdrawal"}'>
          Withdrawal
        </option>
        <option value='{"filterColum":"Type","filterColumName":" Refill"}'>
          Refill
        </option>
      </select>
    </form>
  );
};

export default FilterTransaction;
