import { JsonSchema } from '@/app/JsonSchema';
import { SizeContent } from './SizeContent';

export interface InnerNodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const InnerNodeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  return (
    <>
      <SizeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
    </>
  );
};
