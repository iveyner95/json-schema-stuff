import { borderColor } from "@/app/tailwind-configs";
import { RowData } from "./types";

export const NodeContentTableRow = ({ rowData, isEven }: NodeContentTableRowProps) => {
  const [leftValue, rightValue] = rowData;
  const backgroundColor = isEven ? 'bg-neutral-200' : '';

  return (
    <tr className={`border border-${borderColor} ${backgroundColor}`}>
      <td className={`p-2`}>{leftValue}</td>
      <td className={`p-2 text-right`}>{rightValue}</td>
    </tr>
  );
};

interface NodeContentTableRowProps {
  rowData: RowData;
  isEven: boolean;
}
