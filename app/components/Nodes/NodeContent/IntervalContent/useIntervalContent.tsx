import { JsonSchema } from '@/app/JsonSchema';
import { RowData } from '../NodeContentTable';
import { JsonSchemaKeyWord } from '../types';

export const useIntervalContent = (nodeSchemaDataForNode: JsonSchema) => {
  const multipleOfContentRowData: RowData[] = [];
  const multipleOfData = nodeSchemaDataForNode[JsonSchemaKeyWord.MULTIPLE_OF];

  if (multipleOfData) {
    multipleOfContentRowData.push(['Multiple of', multipleOfData]);
  }

  return multipleOfContentRowData;
};
