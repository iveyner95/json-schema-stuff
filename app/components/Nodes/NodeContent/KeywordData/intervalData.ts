import { JsonSchemaKeyWord, KeywordData } from '../types';

enum IntervalDataKeyword {
  MULTIPLE_OF = JsonSchemaKeyWord.MULTIPLE_OF,
}

export interface IntervalData {
  [IntervalDataKeyword.MULTIPLE_OF]?: number;
}

const intervalDataKeywords: string[] = [IntervalDataKeyword.MULTIPLE_OF];

const intervalDataKeywordsToDescriptionText: Record<IntervalDataKeyword, string> = {
  multipleOf: 'Multiple of',
};

export const intervalContentKeywordData: KeywordData = {
  keywords: intervalDataKeywords,
  keywordsToDescription: intervalDataKeywordsToDescriptionText,
};
