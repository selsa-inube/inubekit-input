import { IInput, Input } from "../Input";
import { MdOutlineMail } from "react-icons/md";

interface IEmailField extends Omit<IInput, "type" | "inputMode"> {}

const EmailField = (props: IEmailField) => {
  return (
    <Input
      {...props}
      iconAfter={<MdOutlineMail />}
      inputMode="email"
      type="email"
    />
  );
};

export { EmailField };
export type { IEmailField };
