import { JsonSchemaKeyWord, KeywordData } from '../types';

enum RangeDataKeyword {
  MINIMUM = JsonSchemaKeyWord.MINIMUM,
  MAXIMUM = JsonSchemaKeyWord.MAXIMUM,
  EXCLUSIVE_MINIMUM = JsonSchemaKeyWord.EXCLUSIVE_MINIMUM,
  EXCLUSIVE_MAXIMUM = JsonSchemaKeyWord.EXCLUSIVE_MAXIMUM,
}
export interface RangeData {
  [RangeDataKeyword.MINIMUM]?: number;
  [RangeDataKeyword.MAXIMUM]?: number;
  [RangeDataKeyword.EXCLUSIVE_MINIMUM]?: number;
  [RangeDataKeyword.EXCLUSIVE_MAXIMUM]?: number;
}

const rangeDataKeywords: string[] = [
  RangeDataKeyword.MINIMUM,
  RangeDataKeyword.MAXIMUM,
  RangeDataKeyword.EXCLUSIVE_MINIMUM,
  RangeDataKeyword.EXCLUSIVE_MINIMUM,
];

const keyOfRangeDataToDescriptionText: Record<RangeDataKeyword, string> = {
  [RangeDataKeyword.MINIMUM]: 'Inclusive minimum #',
  [RangeDataKeyword.MAXIMUM]: 'Inclusive maximum #',
  [RangeDataKeyword.EXCLUSIVE_MINIMUM]: 'Exclusive minimum #',
  [RangeDataKeyword.EXCLUSIVE_MAXIMUM]: 'Exclusive maximum #',
};

export const rangeContentKeywordData: KeywordData = {
  keywords: rangeDataKeywords,
  keywordsToDescription: keyOfRangeDataToDescriptionText,
};
