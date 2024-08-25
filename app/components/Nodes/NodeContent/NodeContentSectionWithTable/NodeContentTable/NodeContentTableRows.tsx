import { NodeContentTableProps } from './NodeContentTable';
import { Row } from './Row';

export const NodeContentTableRows = ({ rowsData }: NodeContentTableRowsProps) => {
  return (
    <>
      {rowsData.map((rowData, index) => {
        const isEven = index % 2 == 0;
        return (
          <Row
            key={`node-content-row-${index}`}
            rowData={rowData}
            isEven={isEven}
          />
        );
      })}
    </>
  );
};

type NodeContentTableRowsProps = NodeContentTableProps;
