import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import Checkbox from "../Checkbox/Checkbox";
import CustomTableHeaderText from "./TableHeaderText";
import CustomTableBox from "./TableHeaderBox";
import TableRow from "./TableRow";
import { data } from "../../models/Dashboard/MemberStatistics/MemberData";

const CustomTable = () => {
  return (
    <TableContainer>
      <Table variant={"unstyled"}>
        <Thead fontFamily={"PoppinsBold"}>
          <Tr
            fontWeight={600}
            color={"dark.300"}
            borderBottomWidth={1}
            borderStyle={"dashed"}
            borderColor={"dark.300"}
          >
            <CustomTableBox>
              <Checkbox />
            </CustomTableBox>
            <CustomTableBox>
              <CustomTableHeaderText>Authors</CustomTableHeaderText>
            </CustomTableBox>
            <CustomTableBox>
              <CustomTableHeaderText>Company</CustomTableHeaderText>
            </CustomTableBox>
            <CustomTableBox>
              <CustomTableHeaderText>Progress</CustomTableHeaderText>
            </CustomTableBox>
            <Th pr={0}>
              <CustomTableHeaderText>Actions</CustomTableHeaderText>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((data) => (
            <TableRow data={data}/>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
