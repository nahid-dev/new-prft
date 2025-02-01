import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const baseStyles =
    "rounded-full text-white bg-foreground font-semibold transition-all duration-300 hover:bg-highlight hover:text-foreground";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
