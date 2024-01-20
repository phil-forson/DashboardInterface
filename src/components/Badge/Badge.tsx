import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Badge: React.FC<{ bgColor?: string; text: string, textColor?: string }> = ({
  bgColor,
  text,
  textColor
}) => {
  return (
    <Box bgColor={bgColor} py={1} px={2} borderRadius={5} height={"fit-content"}>
      <Text color={textColor} fontFamily={"PoppinsBold"}>{text}</Text>
    </Box>
  );
};

export default Badge;
