import { JsonSchemaType } from '@/app/JsonSchema';
import { useNodeSchemaData } from '../../NodeSchemaData';
import { DataWithLabel } from './types';

export const useJsonNode = (id: string, data: DataWithLabel) => {
  const { label } = data;
  const nodeSchemaData = useNodeSchemaData();
  const nodeSchemaDataForId = nodeSchemaData[id];

  if (!nodeSchemaDataForId) {
    throw new Error(`Something went wrong, no schema available for node: ${id}`);
  }

  const jsonSchemaType = nodeSchemaDataForId.type as unknown as JsonSchemaType;

  return { label, jsonSchemaType, nodeSchemaDataForNode: nodeSchemaDataForId };
};
