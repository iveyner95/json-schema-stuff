import { InnerNodeContentProps } from '../InnerNodeContent';
import { NodeContentSection } from '../NodeContentSection';
import { NodeContentTable } from '../NodeContentTable';
import { useSizeContent } from './useSizeContent';

export const SizeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  const sizeContentRowData = useSizeContent(nodeSchemaDataForNode);

  if (sizeContentRowData.length === 0) {
    return null;
  }

  return (
    <NodeContentSection headerText="Size">
      <NodeContentTable rowsData={sizeContentRowData} />
    </NodeContentSection >
  );
};
