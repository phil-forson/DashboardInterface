import { Checkbox, Flex, Text } from "@chakra-ui/react";
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
      borderLeft={`3px solid ${textColor}`}
      color={"white"}
      pl={5}
      justifyContent={"space-between"}
      width={"100%"}
      alignItems={"center"}
    >
      <Flex justifyContent={"space-between"} >
        <Checkbox size={"lg"} pr={"2rem"} iconSize={"1rem"}></Checkbox>
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
