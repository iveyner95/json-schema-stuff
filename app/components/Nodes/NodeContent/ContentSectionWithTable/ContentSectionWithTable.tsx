import { RowData } from '../types';
import { ContentSection } from './ContentSection';
import { Table } from './Table';

export const ContentSectionWithTable = ({ headerText, rowsData }: ContentSectionWithTableProps) => {
  if (rowsData.length === 0) {
    return null;
  }

  return (
    <ContentSection headerText={headerText}>
      <Table rowsData={rowsData} />
    </ContentSection>
  );
};

interface ContentSectionWithTableProps {
  headerText: string;
  rowsData: RowData[];
}
