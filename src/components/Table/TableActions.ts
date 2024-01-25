import ToggleIcon from "../../assets/icons/ToggleIcon";
import DeleteIcon from "../../assets/icons/DeleteIcon";
import { FunctionComponent } from "react";
import EditIcon from "../../assets/icons/EditIcon";

type IAction = {
  icon: FunctionComponent<{ className?: string; fill?: string }>;
  func: string;
};
export const actions: IAction[] = [
  {
    icon: ToggleIcon,
    func: "Toggle",
  },
  { icon: EditIcon, func: "Edit" },
  { icon: DeleteIcon, func: "Delete" },
];
