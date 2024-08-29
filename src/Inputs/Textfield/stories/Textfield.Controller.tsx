import { useState } from "react";
import { IInput, Input } from "../../Input";
import React from "react";

const TextfieldController = (props: IInput) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  function isAlphabetical(value: string) {
    return /^[a-zA-Z]+$/.test(value);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ value: e.target.value, status: "pending" });
  };

  const onFocus = () => {
    if (form.status === "invalid") {
      return setForm({ ...form, status: "invalid" });
    }
    setForm({ ...form, status: "pending" });
  };

  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isValid = isAlphabetical(e.target.value);
    setForm({ ...form, status: isValid ? "pending" : "invalid" });
  };

  const message = "(Please enter only letters in this field)";

  return (
    <Input
      {...props}
      value={form.value}
      onChange={onChange}
      status={form.status}
      message={message}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export { TextfieldController };
