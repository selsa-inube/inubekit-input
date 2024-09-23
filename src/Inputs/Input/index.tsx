import { Emailfield } from "../Emailfield";
import { Moneyfield } from "../Moneyfield";
import { Numberfield } from "../Numberfield";
import { Phonefield } from "../Phonefield";
import { Searchfield } from "../Searchfield";
import { Textfield } from "../Textfield";
import { IInputInputType, IInputSize, IInputStatus } from "./props";

interface IInput {
  disabled?: boolean;
  focused?: boolean;
  fullwidth?: boolean;
  iconAfter?: React.ReactNode;
  iconBefore?: React.ReactNode;
  id: string;
  inputMode?: string;
  label?: string;
  message?: string;
  name?: string;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  size?: IInputSize;
  status?: IInputStatus;
  type?: IInputInputType;
  value?: string | number;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
}

const inputComponents: Record<string, React.ComponentType<IInput>> = {
  email: Emailfield,
  money: Moneyfield,
  number: Numberfield,
  phone: Phonefield,
  search: Searchfield,
  text: Textfield,
};

const Input = (props: IInput) => {
  const { type = "text" } = props;

  const InputComponent = inputComponents[type] || Textfield;

  return <InputComponent {...props} />;
};

export { Input };
export type { IInput };
