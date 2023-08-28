import React from "react";

const sizeClasses = {
  txtSwissraNormal32: "font-normal font-swissranormal",
  txtSwissraNormal20: "font-normal font-swissranormal",
  txtSwissraNormal20WhiteA700: "font-normal font-swissranormal",
  txtSwissraNormal16: "font-normal font-swissranormal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
