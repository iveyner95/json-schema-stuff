import { JsonSchemaKeyWord, KeywordData } from '../types';

enum SizeDataKeyword {
  MIN_PROPERTIES = JsonSchemaKeyWord.MIN_PROPERTIES,
  MAX_PROPERTIES = JsonSchemaKeyWord.MAX_PROPERTIES,
  MIN_ITEMS = JsonSchemaKeyWord.MIN_ITEMS,
  MAX_ITEMS = JsonSchemaKeyWord.MAX_ITEMS,
  MIN_LENGTH = JsonSchemaKeyWord.MIN_LENGTH,
  MAX_LENGTH = JsonSchemaKeyWord.MAX_LENGTH,
}

export interface SizeData {
  [SizeDataKeyword.MIN_PROPERTIES]?: number;
  [SizeDataKeyword.MAX_PROPERTIES]?: number;
  [SizeDataKeyword.MIN_ITEMS]?: number;
  [SizeDataKeyword.MAX_ITEMS]?: number;
  [SizeDataKeyword.MIN_LENGTH]?: number;
  [SizeDataKeyword.MAX_LENGTH]?: number;
}

const sizeDataKeywords: string[] = [
  SizeDataKeyword.MIN_PROPERTIES,
  SizeDataKeyword.MAX_PROPERTIES,
  SizeDataKeyword.MIN_ITEMS,
  SizeDataKeyword.MAX_ITEMS,
  SizeDataKeyword.MIN_LENGTH,
  SizeDataKeyword.MAX_LENGTH,
];

const sizeDataKeywordsToDescriptionText: Record<SizeDataKeyword, string> = {
  [SizeDataKeyword.MIN_PROPERTIES]: 'Minimum # of Properties',
  [SizeDataKeyword.MAX_PROPERTIES]: 'Maximum # of Properties',
  [SizeDataKeyword.MIN_ITEMS]: 'Minimum # of Items',
  [SizeDataKeyword.MAX_ITEMS]: 'Maximum # of Items',
  [SizeDataKeyword.MIN_LENGTH]: 'Minimum length',
  [SizeDataKeyword.MAX_LENGTH]: 'Maximum length',
};

export const sizeContentKeywordData: KeywordData = {
  keywords: sizeDataKeywords,
  keywordsToDescription: sizeDataKeywordsToDescriptionText,
};
