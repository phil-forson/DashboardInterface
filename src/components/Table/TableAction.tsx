import { FunctionComponent, useState } from "react";
import CustomButton from "../Button/CustomButton";

const TableAction: React.FC<{
  action: {
    icon: FunctionComponent<{ className?: string; fill?: string }>;
    func: string;
  };
}> = ({ action }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <CustomButton
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      icon={<action.icon fill={isHovered ? "#009ef7" : "#565674"} />}
      cloneIcon={false}
      backgroundColor={"dark.600"}
    />
  );
};

export default TableAction;
