import { JSX } from "react/jsx-runtime";
import { IEmailField } from "..";
import { EmailFieldController } from "./Emailfield.Controller";
import { parameters, props } from "../../Input/props";

const story = {
  title: "Inputs/EmailField",
  component: EmailFieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IEmailField) => (
  <EmailFieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "email",
  label: "Email Address",
  placeholder: "Enter your email address",
  required: true,
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
