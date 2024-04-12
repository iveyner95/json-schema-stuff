import { JsonSchema } from '@/app/JsonSchema';
import { JsonSchemaKeyWord } from '../types';
import { SizeData, SizeDataEntries } from './types';

export const useSizeContent = (nodeSchemaDataForNode: JsonSchema): SizeDataEntries => {
  const sizeData: SizeData = {};

  const properties: string[] = [JsonSchemaKeyWord.MIN_PROPERTIES, JsonSchemaKeyWord.MAX_PROPERTIES];

  properties.forEach((property) => {
    const value = nodeSchemaDataForNode[property];

    if (value !== undefined && typeof value === 'number') {
      sizeData[property as keyof SizeData] = value;
    }
  });

  const sizeDataEntries: SizeDataEntries = Object.entries(sizeData) as SizeDataEntries;

  return sizeDataEntries;
};
