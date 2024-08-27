import { useState } from "react";
import { IMoneyField, MoneyField } from "..";

const MoneyFieldController = (props: IMoneyField) => {
  const { value = "", status = "pending" } = props;
  const [form, setForm] = useState({ value, status });

  const validateMoney = (amount: string) => {
    const moneyRegex = /^\d+(\.\d{1,2})?$/;
    return moneyRegex.test(amount);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value;
    const isValid = validateMoney(amount);
    setForm({
      value: amount,
      status: isValid || amount === "" ? "pending" : "invalid",
    });
  };

  const message =
    form.status === "invalid"
      ? "Please enter a valid amount (up to two decimal places)."
      : "";

  return (
    <MoneyField
      {...props}
      value={form.value}
      onChange={onChange}
      status={form.status}
      message={message}
    />
  );
};

export { MoneyFieldController };
