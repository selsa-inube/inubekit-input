import { InputUI } from "../Input/interface";
import { IInput } from "../Input";

const Textfield = (props: IInput) => {
  const { ...rest } = props;

  return <InputUI {...rest} inputMode="text" />;
};

export { Textfield };
