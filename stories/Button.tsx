import React from "react";

interface ButtonProps {
  status?: boolean;
  outline?: boolean;
  ghost?: boolean;
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  colors?: "primary" | "secondary" | "success" | "error" | "warning";
  size?: "sx" | "sm" | "md" | "lg" | "xl";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  status = false,
  outline = false,
  ghost = false,
  size = "md",
  rounded = false,
  loading = false,
  disabled = false,
  backgroundColor,
  colors = "primary",
  label,
  ...props
}: ButtonProps) => {
  const mode = status
    ? outline
      ? `btn-outline-${colors}`
      : `btn-${colors}`
    : "";
  const _ghost = ghost ? "btn-ghost" : "";
  const _rounded = rounded ? "btn-rounded" : "";
  const _loading = loading ? "btn-loading" : "";
  return (
    <button
      type="button"
      className={["btn", `btn-${size}`, mode, _ghost, _rounded, _loading].join(
        " "
      )}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
