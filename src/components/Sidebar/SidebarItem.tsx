import {
  Box,
  Button,
  Collapse,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

const SidebarItem: React.FC<{
  icon: React.ReactElement;
  label: string;
  children?: React.ReactNode;
  isExpanded?: boolean;
}> = ({ icon, label, children, isExpanded }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <VStack
      align="start"
      spacing={1}
      width="full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        justifyContent={"space-between"}
        variant="ghost"
        onClick={onToggle}
        width="full"
        _hover={{ bg: "#1b1b28" }}
        transition={"all 0.2s"}
        color={isHovered ? "white" : "dark.500"}
        fontFamily={"PoppinsLight"}
        pl={8}
        py={"0.75rem"}
      >
        <Flex align="center">
          {React.cloneElement(icon, {
            fill: isHovered ? "#009ef7" : "#494b74",
          })}
          <Text color={"sysgrey.100"} ml={4}>
            {label}
          </Text>
        </Flex>
        {children && isExpanded && (
          <Box>
            {isOpen ? (
              <ChevronUpIcon boxSize={6} />
            ) : (
              <ChevronDownIcon boxSize={6} />
            )}
          </Box>
        )}
      </Button>
      {children && <Box as={Collapse} in={isOpen && isExpanded} width={'full'}>{children}</Box>}
    </VStack>
  );
};

export default SidebarItem;
