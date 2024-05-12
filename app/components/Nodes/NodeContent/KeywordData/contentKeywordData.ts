import { KeywordData } from '../types';
import { intervalContentKeywordData } from './intervalData';
import { rangeContentKeywordData } from './rangeData';
import { sizeContentKeywordData } from './sizeData';

export type ContentKeywordDataKey = 'Size' | 'Range' | 'Interval';

export const contentKeywordData: Record<ContentKeywordDataKey, KeywordData> = {
  Size: sizeContentKeywordData,
  Range: rangeContentKeywordData,
  Interval: intervalContentKeywordData,
};
