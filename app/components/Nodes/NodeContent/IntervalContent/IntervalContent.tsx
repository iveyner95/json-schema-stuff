import { InnerNodeContentProps } from '../InnerNodeContent';
import { NodeContentSection } from '../NodeContentSection';
import { NodeContentTable } from '../NodeContentTable';
import { useIntervalContent } from './useIntervalContent';

export const IntervalContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  const multipleOfContentRowData = useIntervalContent(nodeSchemaDataForNode)

  if (multipleOfContentRowData.length === 0) {
    return null
  }

  return (
    <NodeContentSection headerText="Interval">
      <NodeContentTable rowsData={multipleOfContentRowData} />
    </NodeContentSection>
  );
};
