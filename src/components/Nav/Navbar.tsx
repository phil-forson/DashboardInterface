import React from "react";
import { Flex, Button, Spacer, Box, Text } from "@chakra-ui/react";
import NavItem from "./NavItem";
import ChatIcon from "../../assets/icons/ChatIcon";
import NavIconItem from "./NavIconItem";
import SearchIcon from "../../assets/icons/SearchIcon";
import ChartIcon from "../../assets/icons/ChartIcon";
import PagesIcon from "../../assets/icons/PagesIcon";
import WidgetIcon from "../../assets/icons/WidgetsIcon";
import DarkModeIcon from "../../assets/icons/DarkModeIcon";
import AvatarIcon from "../../assets/avatars/300-1.jpg"
import Avatar from "./Avatar";


const Navbar: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => {
  const navItems = ["Dashboard", "LayoutBuilder", "Crafted", "Apps"];

  const icons = [
    { component: <SearchIcon />, hasNotification: false },
    { component: <ChartIcon />, hasNotification: false },
    { component: <PagesIcon />, hasNotification: false },
    { component: <ChatIcon />, hasNotification: true },
    { component: <WidgetIcon />, hasNotification: false },
    { component: <DarkModeIcon />, hasNotification: false },
  ];

  return (
    <Flex
      bg="dark.100"
      p={4}
      alignItems="center"
      justifyContent="space-between"
      marginLeft={isExpanded ? "265px" : "80px"}
      transition="margin-left 0.3s"
      height={65}
      position={'sticky'}
      top={0}
    >
      <Flex alignItems="center" justifyContent="space-between">
        {navItems.map((item, index) => (
          <NavItem label={item} key={index} />
        ))}
      </Flex>
      <Spacer />
      <Flex alignItems='center' justifyContent='space-between'>
        {icons.map((icon, index) => (
          <NavIconItem icon={icon.component} hasNotification={icon.hasNotification} key={index}/>
        ))}
        <Avatar src={AvatarIcon} alt="User Avatar" />

      </Flex>
    </Flex>
  );
};

export default Navbar;
