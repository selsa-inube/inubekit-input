import { JSX } from "react/jsx-runtime";
import { NumberfieldController } from "./Numberfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/NumberField",
  component: NumberfieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <NumberfieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "quantity",
  label: "Quantity",
  placeholder: "Enter a number",
  required: true,
  type: "number",
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
