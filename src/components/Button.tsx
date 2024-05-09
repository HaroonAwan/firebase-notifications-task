import { MouseEventHandler, ReactNode } from "react";
import { classNames } from "../utils/misc";

export type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  expanded?: boolean;
  extraClasses?: string;
  children?: ReactNode | ReactNode[];
  variant?: "default" | "primary" | "danger" | "outlined" | "blocked" | "icon";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export function Button(props: ButtonProps) {
  const {
    variant = "default",
    extraClasses = "",
    disabled = false,
    children,
    onClick,
    type,
  } = props;

  function resolveClasses() {
    switch (variant) {
      case "primary":
        return `stroke-primary bg-primary hover:bg-blue-500 focus-visible:outline-blue-600 text-white`;
      case "outlined":
        return "bg-transparent border border-gray-300 text-black-900 hover:bg-blue-50";
      case "blocked":
        return "text-white bg-gray-300 hover:bg-primary-normal active:bg-primary-normal";
      case "danger":
        return "text-white stroke-white bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700 active:bg-red-800 active:border-red-800";
      case "icon":
        return "bg-red-300 hover:bg-red-700 hover:border-red-700 active:bg-red-800 active:border-red-800";
      default:
        return "text-grey-900 stroke-grey-900 bg-white hover:bg-grey-100 border-grey-300 active:bg-grey-100";
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        "flex cursor-pointer justify-center rounded-md px-3 py-1.5 text-sm leading-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:text-gray-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:stroke-gray-600 disabled:shadow-none",
        resolveClasses(),
        extraClasses
      )}
    >
      {children}
    </button>
  );
}
