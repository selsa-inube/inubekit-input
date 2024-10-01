import { MdOutlinePhone } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const Phonefield = (props: IInput) => {
  const { iconAfter = <MdOutlinePhone />, ...rest } = props;

  return <InputUI {...rest} inputMode="tel" iconAfter={iconAfter} />;
};

export { Phonefield };
