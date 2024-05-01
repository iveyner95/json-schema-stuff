import { JsonSchema } from '@/app/JsonSchema';
import { NodeContentSectionWithTable } from './NodeContentSectionWithTable';
import { useInnerNodeContent } from './useInnerNodeContent';

export interface InnerNodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const InnerNodeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  const { contentDataArr } = useInnerNodeContent();

  return (
    <div>
      {contentDataArr.map(([headerText, keywordData], index) => (
        <NodeContentSectionWithTable
          key={`NodeContentSectionWithTable-${index}`}
          nodeSchemaDataForNode={nodeSchemaDataForNode}
          headerText={headerText}
          keywordData={keywordData}
        />
      ))}
    </div>
  );
};
