import { JsonSchema } from '@/app/JsonSchema';
import { ContentSectionWithTable } from './ContentSectionWithTable';
import { useNodeContent } from './useNodeContent';

interface NodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const NodeContent = ({ nodeSchemaDataForNode }: NodeContentProps) => {
  const { contentDataArr, isEmpty } = useNodeContent(nodeSchemaDataForNode);

  if (isEmpty) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 pb-2">
      {contentDataArr.map(([headerText, rowsData], index) => (
        <ContentSectionWithTable
          key={`ContentSectionWithTable-${index}`}
          headerText={headerText}
          rowsData={rowsData}
        />
      ))}
    </div>
  );
};
