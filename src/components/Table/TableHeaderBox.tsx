import { BoxProps, Th } from "@chakra-ui/react";

const CustomTableHeaderBox: React.FC<{ children: React.ReactNode } & BoxProps> = ({
    children,
    ...rest
  }) => {
    return <Th pl={0} {...rest}>{children}</Th>;
  };

  export default CustomTableHeaderBox