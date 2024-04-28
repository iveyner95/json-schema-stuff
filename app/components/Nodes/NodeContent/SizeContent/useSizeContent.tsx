import { JsonSchema } from '@/app/JsonSchema';
import { RowData } from '../NodeContentTable';
import { JsonSchemaKeyWord } from '../types';
import { SizeData } from './types';

export const useSizeContent = (nodeSchemaDataForNode: JsonSchema) => {
  const sizeContentRowData: RowData[] = [];

  const properties: string[] = [
    JsonSchemaKeyWord.MIN_PROPERTIES,
    JsonSchemaKeyWord.MAX_PROPERTIES,
    JsonSchemaKeyWord.MIN_ITEMS,
    JsonSchemaKeyWord.MAX_ITEMS,
    JsonSchemaKeyWord.MIN_LENGTH,
    JsonSchemaKeyWord.MAX_LENGTH,
  ];

  properties.forEach((property) => {
    const value = nodeSchemaDataForNode[property];

    if (value !== undefined && typeof value === 'number') {
      const description = keyOfSizeDataToDescriptionText[property as keyof SizeData]
      sizeContentRowData.push([description, value]);
    }
  });


  return sizeContentRowData;
};

const keyOfSizeDataToDescriptionText: Record<keyof SizeData, string> = {
  minProperties: 'Minimum # of Properties',
  maxProperties: 'Maximum # of Properties',
  minItems: 'Minimum # of Items',
  maxItems: 'Maximum # of Items',
  minLength: 'Minimum length',
  maxLength: 'Maximum length',
};
