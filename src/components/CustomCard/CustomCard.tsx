import { BoxProps, Card } from "@chakra-ui/react";

type CustomCardProps = {
  children: React.ReactNode;
  padding?: boolean;
  width?: string;
} & BoxProps;

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  padding,
  width,
  ...rest
}) => {
  return (
    <Card
      padding={padding ? "" : 0}
      width={"100%"}
      flex={1}
      mb={{ xxl: "2rem" }}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
