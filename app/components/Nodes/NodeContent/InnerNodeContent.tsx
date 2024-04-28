import { JsonSchema } from '@/app/JsonSchema';
import { IntervalContent } from './IntervalContent';
import { SizeContent } from './SizeContent';

export interface InnerNodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const InnerNodeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  return (
    // TODO: 
    <div className=''>
      <SizeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
      <IntervalContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
    </div>
  );
};
