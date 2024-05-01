import { InnerNodeContentProps } from '../InnerNodeContent';
import { KeywordData } from '../types';
import { NodeContentSection } from './NodeContentSection';
import { NodeContentTable } from './NodeContentTable';
import { useRowsData } from './useRowsData';

export const NodeContentSectionWithTable = ({
  nodeSchemaDataForNode,
  headerText,
  keywordData,
}: NodeContentSectionWithTableProps) => {
  const { rowsData } = useRowsData(nodeSchemaDataForNode, keywordData);

  if (rowsData.length === 0) {
    return null;
  }

  return (
    <NodeContentSection headerText={headerText}>
      <NodeContentTable rowsData={rowsData} />
    </NodeContentSection>
  );
};

interface NodeContentSectionWithTableProps extends InnerNodeContentProps {
  headerText: string;
  keywordData: KeywordData;
}
