import { CardBody, Flex } from "@chakra-ui/react";
import Row from "./Row";
import { data } from "./TodoData";
import CustomCard from "../../../components/CustomCard/CustomCard";

const Todo = () => {
  return (
    <CustomCard headerText="Todo">
      <CardBody padding={"1.25rem 2.25rem"}>
        <Flex flexDir={"column"} gap={7}>
          {data.map((data) => (
            <Row
              text={data.text}
              dueDays={data.dueDays}
              bgColor={data.bgColor}
              textColor={data.textColor}
            />
          ))}
        </Flex>
      </CardBody>
    </CustomCard>
  );
};

export default Todo;
