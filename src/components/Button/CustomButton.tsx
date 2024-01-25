import React, { useState } from "react";
import { Button, ButtonProps, Text } from "@chakra-ui/react";

type Props = {
  label?: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  bgColor?: string;
  bgColorHover?: string;
  textColorHover?: string;
  icon?: React.ReactElement;
  iconColor?: string;
  cloneIcon?: boolean;
} & ButtonProps;
const CustomButton: React.FC<Props> = ({
  label,
  onClick,
  className,
  textClassName,
  bgColor,
  bgColorHover,
  icon,
  textColorHover,
  iconColor,
  cloneIcon = true,
  ...rest
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      marginRight={4}
      _hover={{ bg: bgColorHover, color: textColorHover }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      fontFamily={"PoppinsRegular"}
      bgColor={bgColor}
      transition={"background-color 0.5s"}
      leftIcon={
        cloneIcon
          ? icon &&
            React.cloneElement(icon, {
              fill: iconColor ? iconColor : isHovered ? "#fff" : "#494b74",
            })
            : undefined
      }
      {...rest}
      _active={{
        bgColor: bgColor,
      }}
      
    >
      {icon && !cloneIcon && (icon)}
      <Text
        className={textClassName}
        textColor={isHovered ? textColorHover : ""}
        transition={"all 0.5s"}
      >
        {label}
      </Text>
    </Button>
  );
};

export default CustomButton;
