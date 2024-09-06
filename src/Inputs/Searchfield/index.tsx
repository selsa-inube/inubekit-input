import { MdOutlineSearch } from "react-icons/md";
import { IInput } from "../Input";
import { InputUI } from "../Input/interface";

const Searchfield = (props: IInput) => {
  const { iconAfter = <MdOutlineSearch />, ...rest } = props;

  return <InputUI {...rest} inputMode="search" iconAfter={iconAfter} />;
};

export { Searchfield };
