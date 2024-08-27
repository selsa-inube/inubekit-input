import { useState } from "react";
import { EmailField, IEmailField } from "..";

const EmailFieldController = (props: IEmailField) => {
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
    <EmailField
      {...props}
      message={message}
      status={form.status}
      value={form.value}
      onChange={onChange}
    />
  );
};

export { EmailFieldController };
