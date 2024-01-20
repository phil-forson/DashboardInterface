import { Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import React from "react";

type CardProps = {
    icon: React.ReactElement;
    title: string;
    linkText: string;
    color: string;
  } & BoxProps;
  const Card: React.FC<CardProps> = ({
    icon,
    title,
    linkText,
    color,
    textColor,
    ...rest
  }) => {
    return (
      <Flex
        direction="column"
        bg={color}
        p={6}
        rounded="0.75rem"
        mb="7"
        flex={"1 1 0"}
        {...rest}
      >
        <Box as="span" className={"block my-2"}>
          {React.cloneElement(icon, { fill: textColor })}
        </Box>
        <Text
          color={textColor}
          fontWeight="bold"
          fontSize="md"
          textDecor={"none"}
        >
          {title}
        </Text>
      </Flex>
    );
  };

  export default Card