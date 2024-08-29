import { ReactNode } from "react";
import {
  MdOutlineMail,
  MdOutlineAttachMoney,
  MdOutlineNumbers,
  MdOutlinePhone,
  MdOutlineSearch,
} from "react-icons/md";

interface InputConfig {
  inputMode?: string;
  iconAfter?: ReactNode;
  placeholder?: string;
}

const inputConfigMap: Record<string, InputConfig> = {
  email: {
    inputMode: "email",
    iconAfter: <MdOutlineMail />,
  },
  text: {
    inputMode: "text",
  },
  number: {
    inputMode: "numeric",
    iconAfter: <MdOutlineNumbers />,
  },
  tel: {
    inputMode: "tel",
    iconAfter: <MdOutlinePhone />,
  },
  search: {
    inputMode: "search",
    iconAfter: <MdOutlineSearch />,
  },
  money: {
    inputMode: "decimal",
    iconAfter: <MdOutlineAttachMoney />,
  },
};

const inputConfigFactory = (type?: string): InputConfig => {
  return inputConfigMap[type || ""] || {};
};

export { inputConfigFactory };
