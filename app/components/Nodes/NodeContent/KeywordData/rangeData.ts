import { JsonSchemaKeyWord, KeywordData } from '../types';

interface RangeData {
  [JsonSchemaKeyWord.MINIMUM]?: number;
  [JsonSchemaKeyWord.MAXIMUM]?: number;
  [JsonSchemaKeyWord.EXCLUSIVE_MINIMUM]?: number;
  [JsonSchemaKeyWord.EXCLUSIVE_MAXIMUM]?: number;
}

const rangeDataKeywords: string[] = [
  JsonSchemaKeyWord.MINIMUM,
  JsonSchemaKeyWord.MAXIMUM,
  JsonSchemaKeyWord.EXCLUSIVE_MINIMUM,
  JsonSchemaKeyWord.EXCLUSIVE_MINIMUM,
];

const keyOfRangeDataToDescriptionText: Record<keyof RangeData, string> = {
  minimum: 'Minimum # (inclusive)',
  maximum: 'Maximum # (inclusive)',
  exclusiveMinimum: 'Minimum # (exclusive)',
  exclusiveMaximum: 'Maximum # (exclusive)',
};

export const rangeContentKeywordData: KeywordData = {
  keywords: rangeDataKeywords,
  keywordsToDescription: keyOfRangeDataToDescriptionText,
};
