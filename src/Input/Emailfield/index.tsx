import { MdOutlineMail } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const Emailfield = (props: IInput) => {
  const { iconAfter = <MdOutlineMail />, ...rest } = props;

  return <InputUI {...rest} inputMode="email" iconAfter={iconAfter} />;
};

export { Emailfield };
