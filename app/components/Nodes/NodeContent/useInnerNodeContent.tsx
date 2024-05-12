import { JsonSchema } from '@/app/JsonSchema';
import { contentKeywordData } from './KeywordData';
import { RowData } from './NodeContentSectionWithTable/NodeContentTable';
import { KeywordData } from './types';

export const useInnerNodeContent = (nodeSchemaDataForNode: JsonSchema) => {
  const contentDataArr = generateContentDataArr(nodeSchemaDataForNode);
  const isEmpty = contentDataArr.length === 0;

  return {
    contentDataArr,
    isEmpty,
  };
};

const generateContentDataArr = (nodeSchemaDataForNode: JsonSchema) => {
  const contentDataArr: [string, RowData[]][] = [];

  Object.entries(contentKeywordData).forEach(([key, keywordData]) => {
    const rowData = convertKeywordDataToRowData(nodeSchemaDataForNode, keywordData);

    if (rowData.length > 0) {
      contentDataArr.push([key, rowData]);
    }
  });

  return contentDataArr;
};

const convertKeywordDataToRowData = (
  nodeSchemaDataForNode: JsonSchema,
  keywordData: KeywordData
) => {
  const { keywords, keywordsToDescription } = keywordData;
  const rowsData: RowData[] = [];

  keywords.forEach((keyword) => {
    const value = nodeSchemaDataForNode[keyword];

    if (value !== undefined) {
      const description = keywordsToDescription[keyword];
      rowsData.push([description, value]);
    }
  });

  return rowsData;
};
