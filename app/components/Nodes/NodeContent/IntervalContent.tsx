import { JsonSchema } from '@/app/JsonSchema';
import { InnerNodeContentProps } from './InnerNodeContent';
import { NodeContentSection } from './NodeContentSection';
import { JsonSchemaKeyWord } from './types';

export const IntervalContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  const multipleOf = useIntervalContent(nodeSchemaDataForNode)

  if (multipleOf === undefined) {
    return null
  }

  return (
    <NodeContentSection headerText="Interval">
      <div className='p-2 text-xs'>
        Multiple of
        <span className='font-bold'>
          {multipleOf}
        </span>
      </div>
    </NodeContentSection>
  );
};

/* TODO 
  - return type
  - separate file
*/
const useIntervalContent = (nodeSchemaDataForNode: JsonSchema): number | undefined => {
  return nodeSchemaDataForNode[JsonSchemaKeyWord.MULTIPLE_OF]
}