import { JsonSchema } from '@/app/JsonSchema';
import { InnerNodeContent } from './InnerNodeContent';

interface NodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const NodeContent = ({ nodeSchemaDataForNode }: NodeContentProps) => {
  // console.log({ nodeSchemaDataForNode });

  return (
    <div className="p-3">
      {/* TODO: handle this better... we shouldn't have nodes without a schema... right?*/}
      {nodeSchemaDataForNode && <InnerNodeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />}
    </div>
  );
};
