import { useState } from "react";

import { INumberField, NumberField } from "..";

const NumberFieldController = (props: INumberField) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const validateNumber = (number: string) => {
    const numberRegex = /^\d*$/;
    return numberRegex.test(number);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    const isValid = validateNumber(number);
    setForm({
      value: number,
      status: isValid || number === "" ? "pending" : "invalid",
    });
  };

  const message =
    form.status === "invalid" ? "Please enter a valid number." : "";

  return (
    <NumberField
      {...props}
      value={form.value}
      onChange={onChange}
      status={form.status}
      message={message}
    />
  );
};

export { NumberFieldController };
