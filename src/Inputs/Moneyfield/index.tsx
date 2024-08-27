import { IInput, Input } from "../Input";
import { MdOutlineAttachMoney } from "react-icons/md";

interface IMoneyField extends Omit<IInput, "type" | "inputMode"> {}

const MoneyField = (props: IMoneyField) => {
  return (
    <Input
      {...props}
      type="text"
      inputMode="decimal"
      iconAfter={<MdOutlineAttachMoney />}
    />
  );
};

export { MoneyField };
export type { IMoneyField };
