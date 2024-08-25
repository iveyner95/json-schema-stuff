import { RowData } from '../../types';

export const Row = ({ rowData, isEven }: RowProps) => {
  const [leftValue, rightValue] = rowData;
  const backgroundColor = isEven ? 'bg-neutral-200' : '';

  return (
    <tr className={`${backgroundColor}`}>
      <td className={`p-2`}>{leftValue}</td>
      <td className={`p-2 text-right`}>{rightValue}</td>
    </tr>
  );
};

interface RowProps {
  rowData: RowData;
  isEven: boolean;
}
