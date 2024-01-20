import { BoxProps, Card, CardHeader, Flex, Text } from "@chakra-ui/react";
import WidgetIcon from "../../assets/icons/WidgetsIcon";

type CustomCardProps = {
  headerText: string;
  headerSubtext?: string;
  headerRightComponent?: React.ReactElement;
  cardBgColor?: string;
  children: React.ReactNode;
} & BoxProps;

const CustomCard: React.FC<CustomCardProps> = ({
  headerText,
  headerRightComponent,
  headerSubtext,
  cardBgColor,
  children,
  ...rest
}) => {
  return (
    <Card
      width={"100%"}
      flex={1}
      borderRadius={13}
      padding={0}
      bgColor={cardBgColor ?? "dark.100"}
      {...rest}
    >
      <CardHeader
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
        padding={"1.25rem 2.25rem"}
        marginTop={4}
        flexWrap={"wrap"}
        color={"white"}
      >
        <Flex flexDir={"column"}>
          <Text
            fontSize={"1.275rem"}
            fontWeight={500}
            fontFamily={"PoppinsBold"}
          >
            {headerText}
          </Text>
          {headerSubtext && (
            <Text
              fontSize={".95rem"}
              fontWeight={600}
              fontFamily={"PoppinsBold"}
              color={"dark.300"}
            >
              {headerSubtext}
            </Text>
          )}
        </Flex>
        {headerRightComponent ? headerRightComponent : <WidgetIcon />}
      </CardHeader>
      {children}
    </Card>
  );
};

export default CustomCard;
