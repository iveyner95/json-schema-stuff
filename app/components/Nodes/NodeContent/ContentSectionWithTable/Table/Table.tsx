import { borderColor } from '@/app/tailwind-configs';
import { RowData } from '../../types';
import { Rows } from './Rows';

export interface TableProps {
  rowsData: RowData[];
}

export const Table = ({ rowsData }: TableProps) => {
  return (
    <table className={`w-full border-collapse text-xs border-b border-${borderColor}`}>
      <thead>
        <tr>
          <th className={`p-2 text-left`}>Keyword</th>
          <th className={`p-2 text-left`}>Description</th>
          <th className={`p-2 font-bold text-right`}>Value</th>
        </tr>
      </thead>
      <tbody>
        <Rows rowsData={rowsData} />
      </tbody>
    </table>
  );
};
