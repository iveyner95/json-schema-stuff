import { KeywordData } from './InnerNodeContent';
import { contentKeywordData } from './KeywordData';

export const useInnerNodeContent = () => {
  const contentDataArr: [string, KeywordData][] = [
    ['Size', contentKeywordData.size],
    ['Range', contentKeywordData.range],
    ['Interval', contentKeywordData.interval]
  ]

  return {
    contentDataArr
  }
};
