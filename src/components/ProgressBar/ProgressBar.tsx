import { Box } from "@chakra-ui/react";
import React from "react";

const ProgressBar: React.FC<{ progress: number; progressColor: string }> = ({
  progress,
  progressColor,
}) => {
  return (
    <Box w={"80%"} h={"6px"} bgColor={"dark.800"} borderRadius={4}>
      <Box w={`${progress}%`} bgColor={progressColor} h={"100%"} borderLeftRadius={4}></Box>
    </Box>
  );
};

export default ProgressBar;
