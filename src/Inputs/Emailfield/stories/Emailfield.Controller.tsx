import { useState } from "react";
import { IInput, Input } from "../../Input";

const EmailfieldController = (props: IInput) => {
  const { status = "pending", value = "" } = props;
  const [form, setForm] = useState({ status, value });

  const message =
    form.status === "invalid" ? "Please enter a valid email address." : "";

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const isValid = validateEmail(email);
    setForm({
      status: isValid || email === "" ? "pending" : "invalid",
      value: email,
    });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Input
      {...props}
      message={message}
      status={form.status}
      value={form.value}
      onChange={onChange}
    />
  );
};

export { EmailfieldController };
