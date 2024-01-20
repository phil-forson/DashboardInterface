import { CardBody } from "@chakra-ui/react";
import CustomCard from "../../CustomCard/CustomCard";
import Row from "./Row";

const Todo = () => {
  return (
    <CustomCard headerText="Todo">
      <CardBody padding={"1.25rem 2.25rem"}>
        <Row
          bgColor="#1c3238"
          textColor="#50cd89"
          text="Create Firestone Logo"
          dueDate="2"
        />
      </CardBody>
    </CustomCard>
  );
};

export default Todo;
