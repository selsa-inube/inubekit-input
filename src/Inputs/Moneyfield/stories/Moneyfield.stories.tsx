import { JSX } from "react/jsx-runtime";
import { IMoneyField } from "..";
import { parameters, props } from "../../Input/props";
import { MoneyFieldController } from "./Moneyfield.Controller";

const story = {
  title: "Inputs/MoneyField",
  component: MoneyFieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IMoneyField) => (
  <MoneyFieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "amount",
  label: "Amount",
  placeholder: "Enter amount",
  required: true,
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
