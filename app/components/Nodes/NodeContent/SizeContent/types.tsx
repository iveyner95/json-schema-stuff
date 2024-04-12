import { JsonSchemaKeyWord } from '../types';

export interface SizeData {
  [JsonSchemaKeyWord.MIN_PROPERTIES]?: number;
  [JsonSchemaKeyWord.MAX_PROPERTIES]?: number;
}
export type SizeDataEntries = [keyof SizeData, number][];
