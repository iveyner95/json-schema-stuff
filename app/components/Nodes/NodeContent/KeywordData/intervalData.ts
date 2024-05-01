import { KeywordData } from '../InnerNodeContent';
import { JsonSchemaKeyWord } from '../types';

interface IntervalData {
  [JsonSchemaKeyWord.MULTIPLE_OF]?: number;
}

const intervalDataKeywords: string[] = [JsonSchemaKeyWord.MULTIPLE_OF];

const intervalDataKeywordsToDescriptionText: Record<keyof IntervalData, string> = {
  multipleOf: 'Multiple of',
};

export const intervalContentKeywordData: KeywordData = {
  keywords: intervalDataKeywords,
  keywordsToDescription: intervalDataKeywordsToDescriptionText,
};
