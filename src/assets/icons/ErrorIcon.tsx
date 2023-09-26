import React from "react";

const ErrorIcon: React.FC<{ className?: string; fill?: string }> = ({
  className,
  fill,
}) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      color={fill}
    >
      <rect
        opacity="0.3"
        x="2"
        y="2"
        width="20"
        height="20"
        rx="10"
        fill="currentColor"
      />
      <rect
        x="7"
        y="15.3137"
        width="12"
        height="2"
        rx="1"
        transform="rotate(-45 7 15.3137)"
        fill="currentColor"
      />
      <rect
        x="8.41422"
        y="7"
        width="12"
        height="2"
        rx="1"
        transform="rotate(45 8.41422 7)"
        fill="currentColor"
      />
    </svg>
  );
};

export default ErrorIcon;
