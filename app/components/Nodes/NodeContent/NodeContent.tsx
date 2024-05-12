import { JsonSchema } from '@/app/JsonSchema';
import { InnerNodeContent } from './InnerNodeContent';

interface NodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const NodeContent = ({ nodeSchemaDataForNode }: NodeContentProps) => {
  return (
    <>
      {/* TODO: handle this better... we shouldn't have nodes without a schema... right?*/}
      {nodeSchemaDataForNode && <InnerNodeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />}
    </>
  );
};
