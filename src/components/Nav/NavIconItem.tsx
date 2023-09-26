import React, { useState } from "react";
import { Button, Box } from "@chakra-ui/react";

type NavIconItemProps = {
  icon: React.ReactElement;
  onClick?: () => void;
  hasNotification?: boolean;
};

const NavIconItem: React.FC<NavIconItemProps> = ({
  icon,
  onClick,
  hasNotification = false,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Button
      variant="ghost"
      onClick={onClick}
      marginRight={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      bg={"transparent"}
      _hover={{ bg: "dark.600" }}
      color={isHovered ? "sysblue.100" : "dark.500"}
      fontFamily={"PoppinsRegular"}
      p={2}
      position="relative"
    >
      {React.cloneElement(icon, {
        fill: isHovered ? "sysblue.100" : "dark.500",
      })}
      {hasNotification && (
        <Box
          className="bg-green-500 h-1.5 w-1.5 absolute -top-0.5 left-1/2 transform -translate-x-1/2  rounded-full"
          style={{
            animation: "animationBlink 1s steps(5,start) infinite",
          }}
        ></Box>
      )}
    </Button>
  );
};

export default NavIconItem;
