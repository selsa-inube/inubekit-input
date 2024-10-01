import { JSX } from "react/jsx-runtime";
import { SearchfieldController } from "./Searchfield.Controller";
import { parameters, props } from "../../Input/props";
import { IInput } from "../../Input";

const story = {
  title: "Inputs/Searchfield",
  component: SearchfieldController,
  argTypes: props,
  parameters,
};

const Default = (args: JSX.IntrinsicAttributes & IInput) => (
  <SearchfieldController {...args} />
);

Default.args = {
  disabled: false,
  fullwidth: false,
  id: "Search",
  label: "Search",
  placeholder: "Type something...",
  required: true,
  type: "search",
  size: "wide",
  status: "pending",
};

export { Default };
export default story;
