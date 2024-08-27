import { JSX } from "react/jsx-runtime";
import { INumberField } from "..";
import { NumberFieldController } from "./Numberfield.Controller";
import { parameters, props } from "../../Input/props";

const story = {
  title: "Inputs/NumberField",
  component: NumberFieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & INumberField) => (
  <NumberFieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "quantity",
  label: "Quantity",
  placeholder: "Enter a number",
  required: true,
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
