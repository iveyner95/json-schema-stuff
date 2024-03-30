import { JsonSchemaType } from '@/app/JsonSchema';
import { useNodeSchemaDataValue } from "../../FlowChart/FlowChartWIthoutProviders";
import { DataWithLabel } from './types';

export const useJsonNode = (id: string, data: DataWithLabel) => {
  const { label } = data;
  const nodeSchemaData = useNodeSchemaDataValue();
  const nodeSchemaDataForId = nodeSchemaData[id];

  if (!nodeSchemaDataForId) {
    throw new Error(`Something went wrong, no schema available for node: ${id}`);
  }

  const jsonSchemaType = nodeSchemaData.type as unknown as JsonSchemaType;

  return { label, jsonSchemaType };
};
