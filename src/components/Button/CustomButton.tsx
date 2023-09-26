import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

const CustomButton: React.FC<{
  label: string;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  bgColorHover?: string;
  textColorHover?: string;
  icon?: React.ReactElement;
}> = ({
  label,
  onClick,
  className,
  textClassName,
  bgColorHover,
  icon,
  textColorHover,
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
      className={className}
      transition={"all 0.5s"}
      leftIcon={
        icon &&
        React.cloneElement(icon, {
          fill: isHovered ? "#fff" : "#494b74",
        })
      }
    >
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
