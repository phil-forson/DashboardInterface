import { Text } from "@chakra-ui/react";

const CustomTableHeaderText: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text
      textTransform={"capitalize"}
      fontWeight={"600"}
      fontFamily={"PoppinsBold"}
    >
      {children}
    </Text>
  );
};

export default CustomTableHeaderText;
