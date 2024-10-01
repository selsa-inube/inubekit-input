import { JSX } from "react/jsx-runtime";

import { EmailfieldController } from "./Emailfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/EmailField",
  component: EmailfieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <EmailfieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "email",
  label: "Email Address",
  placeholder: "Enter your email address",
  required: true,
  type: "email",
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
