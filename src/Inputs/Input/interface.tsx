import { Icon } from "@inubekit/icon";
import { Label } from "@inubekit/label";
import { inube } from "@inubekit/foundations";
import { ITextAppearance, Text } from "@inubekit/text";
import { Stack } from "@inubekit/stack";
import { MdOutlineWarning } from "react-icons/md";
import { ThemeContext } from "styled-components";
import { useState, useContext } from "react";

import {
  StyledContainer,
  StyledContainerLabel,
  StyledInput,
  StyledInputContainer,
  StyledMessageContainer,
} from "./styles";
import { IInput } from ".";
import { ICounter } from "./props";

const getCounterAppearance = (
  maxLength: number | undefined,
  valueLength: number,
) => {
  if (!maxLength) return "gray";
  const lengthThreshold = Math.floor(maxLength * 0.1);
  if (maxLength - valueLength <= lengthThreshold && valueLength <= maxLength) {
    return "warning";
  } else if (valueLength > maxLength) {
    return "danger";
  }
  return "gray";
};

const Counter = ({ maxLength, currentLength }: ICounter) => {
  const appearance = getCounterAppearance(maxLength, currentLength);
  return (
    <Text type="body" size="small" appearance={appearance} textAlign="start">
      {maxLength ? `${currentLength}/${maxLength}` : `${currentLength}`}
    </Text>
  );
};

const InputUI = (props: IInput) => {
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
    onKeyUp,
    placeholder,
    required = false,
    size = "wide",
    status = "pending",
    type,
    readOnly = false,
    value,
    maxLength,
    minLength,
    counter = false,
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
    if (!readOnly) {
      setFocused(true);
    }
    try {
      onFocus && onFocus(e);
    } catch (error) {
      console.error(`Error executing focus callback. ${error}`);
    }
  };

  const interceptKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    try {
      onKeyUp && onKeyUp(e);
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

  const currentLength = value ? value.toString().length : 0;

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
        {!disabled && counter && (
          <Stack justifyContent="flex-end" alignItems="center" width="100%">
            <Counter maxLength={maxLength} currentLength={currentLength} />
          </Stack>
        )}
      </StyledContainerLabel>

      <StyledInputContainer
        $disabled={disabled}
        $focused={focusedState}
        $iconAfter={iconAfter}
        $iconBefore={iconBefore}
        $status={status}
        readOnly={readOnly}
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
          $iconAfter={iconAfter}
          $iconBefore={iconBefore}
          $required={required}
          $size={size}
          $status={status}
          disabled={disabled}
          id={id}
          inputMode={inputMode}
          label={label}
          name={name}
          onBlur={interceptBlur}
          onChange={interceptChange}
          onFocus={interceptFocus}
          onKeyUp={interceptKeyUp}
          placeholder={placeholder}
          type={type}
          value={value}
          readOnly={readOnly}
          maxLength={maxLength}
          minLength={minLength}
        />

        {iconAfter && (
          <Icon
            appearance="dark"
            disabled={disabled}
            icon={iconAfter}
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

export { InputUI };
