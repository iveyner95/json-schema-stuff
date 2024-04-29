import { NodeContentTableProps } from "./NodeContentTable";
import { NodeContentTableRow } from "./NodeContentTableRow";

export const NodeContentTableRows = ({ rowsData }: NodeContentTableRowsProps) => {
  return (
    <>
      {rowsData.map((rowData, index) => {
        const isEven = index % 2 == 0;
        return (
          <NodeContentTableRow
            key={`node-content-row-${index}`}
            rowData={rowData}
            isEven={isEven} />
        );
      })}
    </>
  );
};

type NodeContentTableRowsProps = NodeContentTableProps;
