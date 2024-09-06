import { MdOutlineAttachMoney } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const Moneyfield = (props: IInput) => {
  const { iconAfter = <MdOutlineAttachMoney />, ...rest } = props;

  return <InputUI {...rest} inputMode="decimal" iconAfter={iconAfter} />;
};

export { Moneyfield };
