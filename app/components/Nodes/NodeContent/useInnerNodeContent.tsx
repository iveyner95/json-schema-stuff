import { contentKeywordData } from './KeywordData';
import { KeywordData } from './types';

export const useInnerNodeContent = () => {
  const contentDataArr: [string, KeywordData][] = [
    ['Size', contentKeywordData.size],
    ['Range', contentKeywordData.range],
    ['Interval', contentKeywordData.interval],
  ];

  return {
    contentDataArr,
  };
};
