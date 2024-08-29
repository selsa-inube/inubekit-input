import { Icon } from "@inubekit/icon";
import { Label } from "@inubekit/label";
import { inube } from "@inubekit/foundations";
import { ITextAppearance, Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { MdOutlineWarning } from "react-icons/md";
import { ThemeContext } from "styled-components";
import { useState, useContext } from "react";

import { IInputInputType, IInputSize, IInputStatus } from "./props";
import {
  StyledContainer,
  StyledContainerLabel,
  StyledInput,
  StyledInputContainer,
  StyledMessageContainer,
} from "./styles";
import { inputConfigFactory } from "./factoryInput";

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
  placeholder?: string;
  required?: boolean;
  size?: IInputSize;
  status?: IInputStatus;
  type?: IInputInputType;
  value?: string | number;
}

const Input = (props: IInput) => {
  const {
    disabled = false,
    fullwidth = false,
    iconAfter,
    iconBefore,
    id,
    inputMode,
    label,
    message,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    size = "wide",
    status = "pending",
    type,
    value,
  } = props;

  const [focusedState, setFocused] = useState(false);

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(false);
    try {
      onBlur && onBlur(e);
    } catch (error) {
      console.error(`Error executing blur callback. ${error}`);
    }
  };

  const interceptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      onChange && onChange(e);
    } catch (error) {
      console.error(`Error when changing value using callback. ${error}`);
    }
  };

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFocused(true);
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error(`Error executing focus callback. ${error}`);
    }
  };

  const theme: typeof inube = useContext(ThemeContext);
  const requiredAppearance =
    (theme?.input?.required?.appearance as ITextAppearance) ||
    inube.input.required.appearance;
  const messageAppearance =
    (theme?.input?.message?.appearance as ITextAppearance) ||
    inube.input.message.appearance;

  const {
    inputMode: computedInputMode,
    iconAfter: computedIconAfter,
    placeholder: computedPlaceholder,
  } = inputConfigFactory(type);

  return (
    <StyledContainer $disabled={disabled} $fullwidth={fullwidth} $size={size}>
      <StyledContainerLabel
        $alignItems="center"
        $disabled={disabled}
        $size={size}
        $wrap="wrap"
      >
        {label && (
          <Label
            disabled={disabled}
            focused={focusedState}
            htmlFor={id}
            invalid={status === "invalid"}
            margin="0px 0px 0px 16px"
            size={size === "compact" ? "medium" : "large"}
          >
            {label}
          </Label>
        )}

        {required && !disabled && (
          <Text
            appearance={requiredAppearance}
            margin="0px 0px 0px 4px"
            size="small"
            textAlign={"center"}
            type="body"
          >
            (Requerido)
          </Text>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        $disabled={disabled}
        $focused={focusedState}
        $iconAfter={computedIconAfter || iconAfter}
        $iconBefore={iconBefore}
        $status={status}
      >
        {iconBefore && (
          <Icon
            appearance="dark"
            disabled={disabled}
            icon={iconBefore}
            size={size === "compact" ? "18px" : "24px"}
          />
        )}

        <StyledInput
          $focused={focusedState}
          $fullwidth={fullwidth}
          $iconAfter={computedIconAfter || iconAfter}
          $iconBefore={iconBefore}
          $required={required}
          $size={size}
          $status={status}
          disabled={disabled}
          id={id}
          inputMode={computedInputMode || inputMode}
          label={label}
          name={name}
          onBlur={interceptBlur}
          onChange={interceptChange}
          onFocus={interceptFocus}
          placeholder={computedPlaceholder || placeholder}
          type={type === "money" ? "text" : type}
          value={value}
        />

        {(computedIconAfter || iconAfter) && (
          <Icon
            appearance="dark"
            disabled={disabled}
            icon={computedIconAfter || iconAfter}
            size={size === "compact" ? "18px" : "24px"}
          />
        )}
      </StyledInputContainer>

      {status === "invalid" && !disabled && message && (
        <StyledMessageContainer>
          <Stack alignItems="center" gap="4px" margin="5px 0 0 16px">
            <Icon
              appearance={messageAppearance}
              icon={<MdOutlineWarning />}
              size="14px"
            />
            <Text
              appearance={messageAppearance}
              size="small"
              textAlign={"center"}
              type="body"
            >
              {message}
            </Text>
          </Stack>
        </StyledMessageContainer>
      )}
    </StyledContainer>
  );
};

export { Input };
export type { IInput };
