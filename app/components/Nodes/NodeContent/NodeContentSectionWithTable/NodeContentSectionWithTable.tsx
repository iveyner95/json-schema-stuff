import { NodeContentSection } from './NodeContentSection';
import { NodeContentTable, RowData } from './NodeContentTable';

export const NodeContentSectionWithTable = ({
  headerText,
  rowsData,
}: NodeContentSectionWithTableProps) => {
  if (rowsData.length === 0) {
    return null;
  }

  return (
    <NodeContentSection headerText={headerText}>
      <NodeContentTable rowsData={rowsData} />
    </NodeContentSection>
  );
};

interface NodeContentSectionWithTableProps {
  headerText: string;
  rowsData: RowData[];
}
