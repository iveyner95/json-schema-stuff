import { NodeProps } from "reactflow";
import { NodeHeader } from '../NodeHeader';
import { NodeBox } from './NodeBox';
import { DataWithLabel } from './types';
import { useJsonNode } from './useJsonNode';

export const JsonNode = ({ data, id }: NodeProps<DataWithLabel>) => {
  const { label, jsonSchemaType } = useJsonNode(id, data)

  return (
    <NodeBox>
      <NodeHeader name={label} jsonSchemaType={jsonSchemaType} />
    </NodeBox>
  )
}
