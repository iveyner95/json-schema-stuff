import { JsonSchema } from '@/app/JsonSchema';
import { IntervalContent } from './IntervalContent';
import { RangeContent } from './RangeContent';
import { SizeContent } from './SizeContent';

export interface InnerNodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const InnerNodeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  return (
    <div>
      <SizeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
      <RangeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
      <IntervalContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
    </div>
  );
};
