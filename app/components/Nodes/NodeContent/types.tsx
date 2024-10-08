export enum JsonSchemaKeyWord {
  MIN_PROPERTIES = 'minProperties',
  MAX_PROPERTIES = 'maxProperties',
  MIN_ITEMS = 'minItems',
  MAX_ITEMS = 'maxItems',
  MIN_LENGTH = 'minLength',
  MAX_LENGTH = 'maxLength',
  MULTIPLE_OF = 'multipleOf',
  MINIMUM = 'minimum',
  MAXIMUM = 'maximum',
  EXCLUSIVE_MINIMUM = 'exclusiveMinimum',
  EXCLUSIVE_MAXIMUM = 'exclusiveMaximum',
}

export interface KeywordData {
  keywords: string[];
  keywordsToDescription: Record<string, string>;
}

type Keyword = string;
type Description = string;
type Value = string | number | boolean;

export type RowData = [Keyword, Description, Value];
