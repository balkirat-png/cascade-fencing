import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl";

  const sizeStyles = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-8 py-4",
    lg: "px-10 py-5 text-lg",
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary-light hover:text-white",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className || ""}`}
      {...props}
    />
  );
}
