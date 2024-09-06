import { MdOutlineNumbers } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const Numberfield = (props: IInput) => {
  const { iconAfter = <MdOutlineNumbers />, ...rest } = props;

  return <InputUI {...rest} inputMode="numeric" iconAfter={iconAfter} />;
};

export { Numberfield };
