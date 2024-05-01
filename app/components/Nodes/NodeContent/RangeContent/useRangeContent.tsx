import { JsonSchema } from '@/app/JsonSchema';
import { RowData } from '../NodeContentTable';
import { JsonSchemaKeyWord } from '../types';

export const useRangeContent = (nodeSchemaDataForNode: JsonSchema) => {
  const sizeContentRowData: RowData[] = [];

  const properties: string[] = [
    JsonSchemaKeyWord.MINIMUM,
    JsonSchemaKeyWord.MAXIMUM,
    JsonSchemaKeyWord.EXCLUSIVE_MINIMUM,
    JsonSchemaKeyWord.EXCLUSIVE_MINIMUM,
  ];

  properties.forEach((property) => {
    const value = nodeSchemaDataForNode[property];

    if (value !== undefined) {
      const description = keyOfRangeDataToDescriptionText[property as keyof RangeData];
      sizeContentRowData.push([description, value]);
    }
  });

  return sizeContentRowData;
};

const keyOfRangeDataToDescriptionText: Record<keyof RangeData, string> = {
  minimum: 'Minimum # (inclusive)',
  maximum: 'Maximum # (inclusive)',
  exclusiveMinimum: 'Minimum # (exclusive)',
  exclusiveMaximum: 'Maximum # (exclusive)',
};

interface RangeData {
  [JsonSchemaKeyWord.MINIMUM]?: number;
  [JsonSchemaKeyWord.MAXIMUM]?: number;
  [JsonSchemaKeyWord.EXCLUSIVE_MINIMUM]?: number;
  [JsonSchemaKeyWord.EXCLUSIVE_MAXIMUM]?: number;
}
