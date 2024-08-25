import { RowData } from '../types';
import { NodeContentSection } from './NodeContentSection';
import { Table } from './Table';

export const NodeContentSectionWithTable = ({
  headerText,
  rowsData,
}: NodeContentSectionWithTableProps) => {
  if (rowsData.length === 0) {
    return null;
  }

  return (
    <NodeContentSection headerText={headerText}>
      <Table rowsData={rowsData} />
    </NodeContentSection>
  );
};

interface NodeContentSectionWithTableProps {
  headerText: string;
  rowsData: RowData[];
}
