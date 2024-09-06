import { useState } from "react";
import { Textfield } from "..";
import { IInput } from "../../Input";

const TextfieldController = (props: IInput) => {
  const { value = "", status = "pending", ...rest } = props;
  const [form, setForm] = useState({ value, status });

  const isAlphabetical = (value: string) => /^[a-zA-Z]+$/.test(value);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, status: "pending" });
  };

  const onFocus = () => {
    if (form.status === "invalid") {
      setForm({ ...form, status: "invalid" });
    } else {
      setForm({ ...form, status: "pending" });
    }
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = isAlphabetical(e.target.value);
    setForm({ ...form, status: isValid ? "pending" : "invalid" });
  };

  const message = form.status === "invalid" ? "Please enter only letters." : "";

  return (
    <Textfield
      {...rest}
      value={form.value}
      status={form.status}
      message={message}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export { TextfieldController };
