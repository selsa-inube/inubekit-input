/* eslint-disable @typescript-eslint/no-unused-vars */
import { MdOutlineAttachMoney } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const Moneyfield = (props: IInput) => {
  const {
    value = "",
    iconAfter = <MdOutlineAttachMoney />,
    onChange,
    ...rest
  } = props;
  const formatMoney = (amount: string) => {
    if (!amount) return "";

    const numberValue = parseFloat(amount.replace(/[^0-9]/g, ""));
    if (isNaN(numberValue)) {
      return "";
    }

    const formatter = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });

    return formatter.format(numberValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const rawValue = input.value.replace(/[^0-9]/g, "");
    const formattedValue = formatMoney(rawValue);
    const cursorPosition = input.selectionStart;
    input.value = formattedValue;
    const newCursorPosition =
      cursorPosition! + (formattedValue.length - rawValue.length);
    input.setSelectionRange(newCursorPosition, newCursorPosition);

    if (onChange) {
      onChange({
        ...e,
        target: { ...e.target, value: rawValue },
      });
    }
  };

  return <InputUI {...rest} iconAfter={iconAfter} onChange={handleChange} />;
};

export { Moneyfield };
