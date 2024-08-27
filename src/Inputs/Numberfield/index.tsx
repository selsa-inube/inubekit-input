import { IInput, Input } from "../Input";
import { MdOutlineNumbers } from "react-icons/md";

interface INumberField extends Omit<IInput, "type" | "inputMode"> {}

const NumberField = (props: INumberField) => {
  return (
    <Input
      {...props}
      type="number"
      inputMode="numeric"
      iconAfter={<MdOutlineNumbers />}
      placeholder="Enter a number"
    />
  );
};

export { NumberField };
export type { INumberField };
