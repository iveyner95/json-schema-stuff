import { JsonSchemaKeyWord } from '../types';

export interface SizeData {
  [JsonSchemaKeyWord.MIN_PROPERTIES]?: number;
  [JsonSchemaKeyWord.MAX_PROPERTIES]?: number;
  [JsonSchemaKeyWord.MIN_ITEMS]?: number;
  [JsonSchemaKeyWord.MAX_ITEMS]?: number;
}
export type SizeDataEntries = [keyof SizeData, number][];
