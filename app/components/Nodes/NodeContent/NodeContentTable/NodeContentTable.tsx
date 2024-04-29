import { NodeContentTableRows } from "./NodeContentTableRows"
import { RowData } from "./types"

export interface NodeContentTableProps {
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