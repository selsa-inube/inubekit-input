import { JSX } from "react/jsx-runtime";
import { parameters, props } from "../../Input/props";
import { MoneyfieldController } from "./Moneyfield.Controller";
import { IInput } from "../../Input";
const story = {
  title: "Inputs/MoneyField",
  component: MoneyfieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <MoneyfieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "amount",
  label: "Amount",
  placeholder: "Enter amount",
  required: true,
  type: "money",
  size: "wide",
  status: "pending",
  value: "",
};

export { Default };
export default story;
