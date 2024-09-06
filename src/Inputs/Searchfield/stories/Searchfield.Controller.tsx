import { useState } from "react";
import { Searchfield } from "..";
import { IInput } from "../../Input";

const SearchfieldController = (props: IInput) => {
  const { value = "", status = "pending", ...rest } = props;
  const [form, setForm] = useState({ value, status });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setForm({
      value: searchTerm,
      status: "pending",
    });
  };

  return (
    <Searchfield
      {...rest}
      value={form.value}
      status={form.status}
      onChange={onChange}
    />
  );
};

export { SearchfieldController };
