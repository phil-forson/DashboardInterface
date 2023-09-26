import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

type NavItemProps = {
  label: string;
  onClick?: () => void;
};

const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      marginRight={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bg={'transparent'}
      _hover={{bg: 'dark.600'}}
      color={isHovered ? "sysblue.100" : "dark.500"}
      fontFamily={'PoppinsRegular'}
    >
      <Text>{label}</Text>
    </Button>
  );
};

export default NavItem;
