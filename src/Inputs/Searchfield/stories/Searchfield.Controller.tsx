import { useState } from "react";
import { IInput, Input } from "../../Input";
import React from "react";

const SearchfieldController = (props: IInput) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setForm({
      value: searchTerm,
      status: "pending",
    });
  };

  return (
    <Input
      {...props}
      value={form.value}
      onChange={onChange}
      status={form.status}
    />
  );
};

export { SearchfieldController };
