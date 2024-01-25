import { FunctionComponent, useState } from "react";
import CustomButton from "../Button/CustomButton";

const TableAction: React.FC<{
  action: {
    icon: FunctionComponent<{
      className?: string;
      fill?: string;
      width?: number;
      height?: number;
    }>;
    func: string;
  };
}> = ({ action }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <CustomButton
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      icon={
        <action.icon
          fill={isHovered ? "#009ef7" : "#565674"}
          width={15}
          height={15}
        />
      }
      cloneIcon={false}
      backgroundColor={"dark.600"}
      margin={0}
      height={12}
      padding={0}
    />
  );
};

export default TableAction;
