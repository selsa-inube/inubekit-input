import { useState } from "react";
import { IInput } from "../../Input";
import { Numberfield } from "..";

const NumberfieldController = (props: IInput) => {
  const { value = "", status = "pending", ...rest } = props;
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
    <Numberfield
      {...rest}
      value={form.value}
      status={form.status}
      message={message}
      onChange={onChange}
    />
  );
};

export { NumberfieldController };
