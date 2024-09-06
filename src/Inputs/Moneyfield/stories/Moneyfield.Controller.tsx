import { useState } from "react";
import { IInput } from "../../Input";
import { Moneyfield } from "..";

const MoneyfieldController = (props: IInput) => {
  const { value = "", status = "pending", ...rest } = props;
  const [form, setForm] = useState({
    rawValue: value,
    status,
  });

  const validateMoney = (amount: string) => {
    return /^\d+$/.test(amount);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawAmount = e.target.value.replace(/[^0-9]/g, "");
    const isValid = validateMoney(rawAmount);

    setForm({
      rawValue: rawAmount,
      status: isValid || rawAmount === "" ? "pending" : "invalid",
    });
  };

  const message =
    form.status === "invalid" ? "Please enter a valid amount." : "";

  return (
    <Moneyfield
      {...rest}
      value={form.rawValue}
      status={form.status}
      message={message}
      onChange={onChange}
    />
  );
};

export { MoneyfieldController };
