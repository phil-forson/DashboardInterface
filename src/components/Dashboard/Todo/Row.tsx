import { Box, Flex, Text } from "@chakra-ui/react";
import Badge from "../../Badge/Badge";
import Checkbox from "../../Checkbox/Checkbox";

type Props = {
  bgColor: string;
  textColor: string;
  dueDays: string;
  text: string;
};
const Row: React.FC<Props> = ({ bgColor, textColor, dueDays, text }) => {
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
          <Checkbox />
        </Flex>
        <Flex flexDir={"column"}>
          <Text
            fontSize={15}
            fontFamily={"PoppinsBold"}
            cursor={"pointer"}
            _hover={{
              color: "sysblue.100",
            }}
          >
            {text}
          </Text>
          <Text fontSize={"1rem"} fontFamily={"PoppinsBold"} color={"dark.300"}>
            Due in {dueDays}
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
