import { JSX } from "react/jsx-runtime";
import { PhonefieldController } from "./Phonefield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/Phonefield",
  component: PhonefieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <PhonefieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "Phone",
  label: "Phone",
  placeholder: "Enter your phone number",
  required: true,
  type: "tel",
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
