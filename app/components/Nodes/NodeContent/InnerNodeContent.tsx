import { JsonSchema } from '@/app/JsonSchema';
import { NodeContentSectionWithTable } from './NodeContentSectionWithTable';
import { useInnerNodeContent } from './useInnerNodeContent';

export interface InnerNodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const InnerNodeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  const { contentDataArr, isEmpty } = useInnerNodeContent(nodeSchemaDataForNode);

  if (isEmpty) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 pb-2">
      {contentDataArr.map(([headerText, rowsData], index) => (
        <NodeContentSectionWithTable
          key={`NodeContentSectionWithTable-${index}`}
          headerText={headerText}
          rowsData={rowsData}
        />
      ))}
    </div>
  );
};
