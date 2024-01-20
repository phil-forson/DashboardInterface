import { TableContainer, Table, Thead, Tr, Th, Text } from "@chakra-ui/react";
import Checkbox from "../Checkbox/Checkbox";

const CustomTable = () => {
  return (
    <TableContainer>
      <Table variant={"unstyled"}>
        <Thead fontFamily={"PoppinsBold"} textTransform={"capitalize"}>
          <Tr fontWeight={600} color={"dark.300"} >
            <Th>
              <Checkbox />
            </Th>
            <Th>
              <Text>Authors</Text>
            </Th>
            <Th>
              <Text>Company</Text>
            </Th>
            <Th>
              <Text>Progress</Text>
            </Th>
            <Th>
              <Text>Actions</Text>
            </Th>
          </Tr>
        </Thead>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
