import { JsonSchemaKeyWord } from '../types';

export interface SizeData {
  [JsonSchemaKeyWord.MIN_PROPERTIES]?: number;
  [JsonSchemaKeyWord.MAX_PROPERTIES]?: number;
  [JsonSchemaKeyWord.MIN_ITEMS]?: number;
  [JsonSchemaKeyWord.MAX_ITEMS]?: number;
  [JsonSchemaKeyWord.MIN_LENGTH]?: number;
  [JsonSchemaKeyWord.MAX_LENGTH]?: number;
}

export type SizeDataEntries = [keyof SizeData, number][];
