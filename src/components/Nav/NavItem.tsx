import React, { useState } from "react";
import CustomButton from "../Button/CustomButton";

type NavItemProps = {
  label: string;
  onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <CustomButton
      label={label}
      variant="ghost"
      onClick={onClick}
      marginRight={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bg={"transparent"}
      _hover={{ bg: "dark.600" }}
      color={isHovered ? "sysblue.100" : "dark.500"}
      fontFamily={"PoppinsRegular"}
    ></CustomButton>
  );
};

export default NavItem;
