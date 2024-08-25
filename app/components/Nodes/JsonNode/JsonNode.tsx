import {
  backgroundColorLM,
  borderRoundness,
  dividedBorders,
  nodeWidth,
  textColorLM,
} from '@/tailwind-configs';
import { NodeProps } from 'reactflow';
import { NodeContent } from '../NodeContent';
import { NodeHeader } from '../NodeHeader';
import { DataWithLabel } from './types';
import { useJsonNode } from './useJsonNode';

export const JsonNode = ({ data, id }: NodeProps<DataWithLabel>) => {
  const { label, jsonSchemaType, nodeSchemaDataForNode } = useJsonNode(id, data);

  return (
    <div
      className={`${nodeWidth} ${borderRoundness} ${backgroundColorLM} ${textColorLM} ${dividedBorders}`}
    >
      <NodeHeader id={id} name={label} jsonSchemaType={jsonSchemaType} />
      <NodeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
    </div>
  );
};
