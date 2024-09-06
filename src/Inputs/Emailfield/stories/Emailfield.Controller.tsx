import { useState } from "react";
import { IInput } from "../../Input";
import { Emailfield } from "..";

const EmailfieldController = (props: IInput) => {
  const { value = "", status = "pending", ...rest } = props;
  const [form, setForm] = useState({ value, status });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setForm({
      value: email,
      status: isValid || email === "" ? "pending" : "invalid",
    });
  };

  const message =
    form.status === "invalid" ? "Please enter a valid email." : "";

  return (
    <Emailfield
      {...rest}
      value={form.value}
      status={form.status}
      message={message}
      onChange={onChange}
    />
  );
};

export { EmailfieldController };
