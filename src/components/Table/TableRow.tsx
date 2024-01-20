import { Flex, GenericAvatarIcon, Text, Tr } from "@chakra-ui/react";
import { ICompanyUser } from "../Dashboard/MemberStatistics/MemberData";
import CustomTableBox from "./TableHeaderBox";
import Avatar from "../Avatar/Avatar";
import Checkbox from "../Checkbox/Checkbox";

const TableRow: React.FC<{ data: ICompanyUser }> = ({ data }) => {
  return (
    <Tr>
      <CustomTableBox>
        <Checkbox />
      </CustomTableBox>
      <CustomTableBox>
        <Flex gap={2}>
          <Avatar src={GenericAvatarIcon} />
          <Flex flexDir={"column"} justify={"center"} gap={2}>
            <Text
              textTransform={"capitalize"}
              fontWeight={"600"}
              fontFamily={"PoppinsBold"}
              color={"white"}
            >
              {data.name}
            </Text>
            <Text textTransform={"capitalize"} color={"dark.300"}>
              {data.books.join(",")}
            </Text>
          </Flex>
        </Flex>
      </CustomTableBox>
      <CustomTableBox>
        <Flex gap={2} flexDir={"column"}>
          <Text
            textTransform={"capitalize"}
            fontWeight={"600"}
            fontFamily={"PoppinsBold"}
            color={"white"}
          >
            {data.companyName}
          </Text>
          <Text textTransform={"capitalize"} color={"dark.300"}>
            {data.books.join(",")}
          </Text>
        </Flex>
      </CustomTableBox>
    </Tr>
  );
};

export default TableRow;
