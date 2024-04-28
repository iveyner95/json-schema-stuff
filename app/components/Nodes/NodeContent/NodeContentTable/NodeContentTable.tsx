import { borderColor } from "@/app/tailwind-configs"
import { RowData } from "./types"

interface NodeContentTableProps {
  rowsData: RowData[]
}

export const NodeContentTable = ({ rowsData }: NodeContentTableProps) => {
  return (
    <table className="w-full border-collapse text-xs" >
      <thead>
        <tr>
          <th className={`p-2 text-left`}>Description</th>
          <th className={`p-2 font-bold text-right`}>Value</th>
        </tr>
      </thead>
      <NodeContentTableRows rowsData={rowsData} />
    </table >
  )
}

type NodeContentTableRowsProps = NodeContentTableProps

export const NodeContentTableRows = ({ rowsData }: NodeContentTableRowsProps) => {
  return (
    <>
      {rowsData.map((rowData, index) => {
        const isEven = index % 2 == 0;
        return (
          <NodeContentTableRow
            key={`node-content-row-${index}`}
            rowData={rowData}
            isEven={isEven}
          />
        );
      })}
    </>
  );
}

interface NodeContentTableRowProps {
  rowData: RowData;
  isEven: boolean;
}

export const NodeContentTableRow = ({ rowData, isEven }: NodeContentTableRowProps) => {
  const [leftValue, rightValue] = rowData;
  const backgroundColor = isEven ? 'bg-neutral-200' : '';

  return (
    <tr className={`border border-${borderColor} ${backgroundColor}`}>
      <td className={`p-2`}>{leftValue}</td>
      <td className={`p-2 text-right`}>{rightValue}</td>
    </tr>
  );
}