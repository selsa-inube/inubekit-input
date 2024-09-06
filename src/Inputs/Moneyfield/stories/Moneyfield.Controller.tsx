import { useState } from "react";
import { IInput } from "../../Input";
import { Moneyfield } from "..";

const MoneyfieldController = (props: IInput) => {
  const { value = "", status = "pending", ...rest } = props;
  const [form, setForm] = useState({
    rawValue: value,
    formattedValue: value,
    status,
  });

  const formatMoney = (amount: string) => {
    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 2,
    });
    return formatter.format(parseFloat(amount || "0"));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawAmount = e.target.value.replace(/[^0-9.]/g, "");
    const isValid = /^\d+(\.\d{1,2})?$/.test(rawAmount);
    setForm({
      rawValue: rawAmount,
      formattedValue: rawAmount,
      status: isValid || rawAmount === "" ? "pending" : "invalid",
    });
  };

  const onBlur = () => {
    const formattedAmount = formatMoney(String(form.rawValue));
    setForm((prev) => ({
      ...prev,
      formattedValue: formattedAmount,
    }));
  };

  const onFocus = () => {
    setForm((prev) => ({
      ...prev,
      formattedValue: form.rawValue,
    }));
  };

  const message =
    form.status === "invalid" ? "Please enter a valid amount." : "";

  return (
    <Moneyfield
      {...rest}
      value={form.formattedValue}
      status={form.status}
      message={message}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
    />
  );
};

export { MoneyfieldController };
