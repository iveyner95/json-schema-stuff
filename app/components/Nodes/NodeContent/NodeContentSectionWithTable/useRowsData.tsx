import { JsonSchema } from '@/app/JsonSchema';
import { KeywordData } from '../types';
import { RowData } from './NodeContentTable';

export const useRowsData = (nodeSchemaDataForNode: JsonSchema, keywordData: KeywordData) => {
  const { keywords, keywordsToDescription } = keywordData;
  const rowsData: RowData[] = [];

  keywords.forEach((keyword) => {
    const value = nodeSchemaDataForNode[keyword];

    if (value !== undefined) {
      const description = keywordsToDescription[keyword];
      rowsData.push([description, value]);
    }
  });

  return { rowsData };
};
