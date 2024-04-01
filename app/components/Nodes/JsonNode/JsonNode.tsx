import { NodeProps } from "reactflow";
import { NodeContent } from "../NodeContent";
import { NodeHeader } from '../NodeHeader';
import { NodeBox } from './NodeBox';
import { DataWithLabel } from './types';
import { useJsonNode } from './useJsonNode';

export const JsonNode = ({ data, id }: NodeProps<DataWithLabel>) => {
  const { label, jsonSchemaType, nodeSchemaDataForNode } = useJsonNode(id, data)

  return (
    <NodeBox>
      <NodeHeader id={id} name={label} jsonSchemaType={jsonSchemaType} />
      <NodeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
    </NodeBox>
  )
}
