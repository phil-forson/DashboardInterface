import { Box, Flex, Text } from "@chakra-ui/react";
import Badge from "../../Badge/Badge";

type Props = {
  bgColor?: string;
  textColor?: string;
  dueDate?: string;
  text?: string;
};
const Row: React.FC<Props> = ({ bgColor, textColor, dueDate, text }) => {
  return (
    <Flex
      color={"white"}
      justifyContent={"space-between"}
      width={"100%"}
      alignItems={"center"}
    >
      <Flex justifyContent={"space-between"}>
        <Box
          as="span"
          height={"40px"}
          width={1}
          bgColor={textColor}
          borderRadius={8}
          mr={"2rem"}
        ></Box>
        <Flex justify={"center"} align={"center"} pr={"2rem"}>
          <input type="checkbox" className="form-check-input" />
        </Flex>
        <Flex flexDir={"column"}>
          <Text fontSize={15} fontFamily={"PoppinsBold"}>
            {text}
          </Text>
          <Text fontSize={"1rem"} fontFamily={"PoppinsBold"} color={"dark.300"}>
            Due in {dueDate} days
          </Text>
        </Flex>
      </Flex>

      <Flex>
        <Badge bgColor={bgColor} textColor={textColor} text="New"></Badge>
      </Flex>
    </Flex>
  );
};

export default Row;
