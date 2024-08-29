import { useState } from "react";
import { IInput, Input } from "../../Input";
import React from "react";

const PhonefieldController = (props: IInput) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^(\+\d{1,3})?\d{7,14}$/;
    return phoneRegex.test(phone);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const phone = e.target.value;
    const isValid = validatePhoneNumber(phone);
    setForm({
      value: phone,
      status: isValid || phone === "" ? "pending" : "invalid",
    });
  };

  const message =
    form.status === "invalid"
      ? "Please enter a valid phone number. E.g., +1234567890 or 1234567890."
      : "";

  return (
    <Input
      {...props}
      value={form.value}
      onChange={onChange}
      status={form.status}
      message={message}
    />
  );
};

export { PhonefieldController };
