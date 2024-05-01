import { KeywordData } from '../InnerNodeContent';
import { JsonSchemaKeyWord } from '../types';

interface SizeData {
  [JsonSchemaKeyWord.MIN_PROPERTIES]?: number;
  [JsonSchemaKeyWord.MAX_PROPERTIES]?: number;
  [JsonSchemaKeyWord.MIN_ITEMS]?: number;
  [JsonSchemaKeyWord.MAX_ITEMS]?: number;
  [JsonSchemaKeyWord.MIN_LENGTH]?: number;
  [JsonSchemaKeyWord.MAX_LENGTH]?: number;
}

const sizeDataKeywords: string[] = [
  JsonSchemaKeyWord.MIN_PROPERTIES,
  JsonSchemaKeyWord.MAX_PROPERTIES,
  JsonSchemaKeyWord.MIN_ITEMS,
  JsonSchemaKeyWord.MAX_ITEMS,
  JsonSchemaKeyWord.MIN_LENGTH,
  JsonSchemaKeyWord.MAX_LENGTH,
];

const sizeDataKeywordsToDescriptionText: Record<keyof SizeData, string> = {
  minProperties: 'Minimum # of Properties',
  maxProperties: 'Maximum # of Properties',
  minItems: 'Minimum # of Items',
  maxItems: 'Maximum # of Items',
  minLength: 'Minimum length',
  maxLength: 'Maximum length',
};

export const sizeContentKeywordData: KeywordData = {
  keywords: sizeDataKeywords,
  keywordsToDescription: sizeDataKeywordsToDescriptionText,
};
