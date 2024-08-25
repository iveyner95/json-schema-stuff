import { RowData } from '../types';
import { ContentSection } from './ContentSection';
import { Table } from './Table';

export const NodeContentSectionWithTable = ({
  headerText,
  rowsData,
}: NodeContentSectionWithTableProps) => {
  if (rowsData.length === 0) {
    return null;
  }

  return (
    <ContentSection headerText={headerText}>
      <Table rowsData={rowsData} />
    </ContentSection>
  );
};

interface NodeContentSectionWithTableProps {
  headerText: string;
  rowsData: RowData[];
}
