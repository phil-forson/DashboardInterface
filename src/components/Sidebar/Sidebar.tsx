import React, { useState } from "react";
import { Box, Button, VStack, Text, Flex } from "@chakra-ui/react";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import ToggleIcon from "../../assets/icons/ToggleIcon";
import MenuIcon from "../../assets/icons/Menuicon";
import SidebarItem from "./SidebarItem";
import PagesIcon from "../../assets/icons/PagesIcon";
import AccountsIcon from "../../assets/icons/AccountsIcon";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import WidgetIcon from "../../assets/icons/WidgetsIcon";
import DocsIcon from "../../assets/icons/DocsIcon";
import ChatIcon from "../../assets/icons/ChatIcon";

type SidebarItemData = {
  icon: React.ReactElement;
  label: string;
  subItems?: string[];
};

const sidebarItems: SidebarItemData[] = [
  { icon: <DashboardIcon />, label: "Dashboard" },
  {
    icon: <ToggleIcon />,
    label: "LayoutBuilder",
  },
  {
    icon: <PagesIcon />,
    label: "Pages",
    subItems: ["Profile", "Wizards"],
  },
  {
    icon: <AccountsIcon />,
    label: "Accounts",
    subItems: ["Overview", "Settings"],
  },
  {
    icon: <ErrorIcon />,
    label: "Errors",
    subItems: ["Error405", "Error404"],
  },
  {
    icon: <WidgetIcon />,
    label: "Widgets",
    subItems: ["Lists", "Charts", "Statistics", "Mixed", "Tables", "Feeds"],
  },
  {
    icon: <ChatIcon />,
    label: "Chat",
    subItems: ["Private Chat", "Group Chat", "Drawer Chat"],
  },
];

const Sidebar: React.FC<{
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ isExpanded, setIsExpanded }) => {
  const [isRotated, setIsRotated] = useState(false);
  const [onMenuIconHovered, setMenuIconHovered] = useState(false);

  const handleSidebarToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  return (
    <Flex
      direction={"column"}
      position="fixed"
      top={0}
      left={0}
      width={isExpanded ? "265px" : "80px"}
      bg="dark.100"
      height="100vh"
      color="white"
      transition="width 0.3s"
    >
      <Box
        onClick={handleSidebarToggle}
        width="full"
        display={"flex"}
        padding={isExpanded ? "0 25px" : "0 10px"}
        height={65}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        bg={"dark.200"}
      >
        <Text width={"full"}>Codie</Text>
        <Button
          onMouseEnter={() => setMenuIconHovered(true)}
          onMouseLeave={() => setMenuIconHovered(false)}
          padding={0}
          onClick={handleRotate} 
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          justifyContent={"flex-end"}
        >
          <MenuIcon
            fill={onMenuIconHovered ? "#009ef7" : "#565674"}
            className={`align-baseline transition-transform duration-700 ${
              isRotated ? "rotate-180" : "rotate-0"
            }`}
          />
        </Button>
      </Box>
      <Box overflowY="auto" flex="1">
        <VStack align="start" marginY={"1.25rem"}>
          {sidebarItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {index === 2 && (
                <Box className="mt-8" pl={8}>
                  <Text
                    width={"full"}
                    textTransform={"capitalize"}
                    align={"left"}
                    color={"dark.400"}
                    className="tracking-[.1rem]"
                  >
                    {isExpanded ? "Crafted" : ""}
                  </Text>
                </Box>
              )}
              <SidebarItem
                icon={item.icon}
                label={isExpanded ? item.label : ""}
                isExpanded={isExpanded}
              >
                {item.subItems && (
                  <VStack justify={"start"} width={"full"}>
                    {item.subItems.map((subItem) => (
                      <SubItem
                        key={subItem}
                        label={subItem}
                        onClick={() => console.log(subItem)}
                      />
                    ))}
                  </VStack>
                )}
              </SidebarItem>
              {index === 5 && (
                <Box className="mt-8" pl={8}>
                  <Text
                    width={"full"}
                    textTransform={"capitalize"}
                    align={"left"}
                    color={"dark.400"}
                    className="tracking-[.1rem]"
                  >
                    {isExpanded ? "Apps" : ""}
                  </Text>
                </Box>
              )}
            </React.Fragment>
          ))}
        </VStack>
      </Box>
      {/* Box with text at the bottom */}
      <Box
        bg="gray.700"
        p={isExpanded ? 4 : 2}
        textAlign="center"
        margin={"1.75rem"}
        className="rounded justify-center items-center"
      >
        {isExpanded ? (
          <Text
            fontSize="sm"
            color="white"
            className=" items-center justify-center flex"
          >
            Docs &amp; Components
          </Text>
        ) : (
          <DocsIcon className="justify-center items-center" />
        )}
      </Box>
    </Flex>
  );
};

type SubItemProps = {
  label: string;
  onClick: () => void;
};

const SubItem: React.FC<SubItemProps> = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Button
      display="flex"
      alignItems="center"
      width="full"
      pl={12}
      bg={"transparent"}
      onClick={onClick}
      _hover={{ bg: "#1b1b28" }}
      transition={"all 0.2s"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        className="menu-bullet"
        borderRadius="50%"
        width={"1.5rem"}
        display={"flex"}
        flexShrink={0}
      >
        <Box
          width={"4px"}
          height={"4px"}
          borderRadius={"100%"}
          bg={"dark.500"}
        ></Box>
      </Box>
      <Button
        variant="ghost"
        justifyContent="left"
        width="full"
        p={0}
        color={isHovered ? "white" : "dark.500"}
        _hover={{ bg: "transparent" }}
      >
        <Text>{label}</Text>
      </Button>
    </Button>
  );
};

export default Sidebar;
