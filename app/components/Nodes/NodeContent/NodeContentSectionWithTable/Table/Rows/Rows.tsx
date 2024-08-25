import { TableProps } from '../Table';
import { Row } from './Row';

export const Rows = ({ rowsData }: RowsProps) => {
  return (
    <>
      {rowsData.map((rowData, index) => {
        const isEven = index % 2 == 0;
        return <Row key={`node-content-row-${index}`} rowData={rowData} isEven={isEven} />;
      })}
    </>
  );
};

type RowsProps = TableProps;
