import { JsonSchema } from '@/app/JsonSchema';
import { NodeContentSection } from './NodeContentSection';
import { NodeContentTable, RowData } from './NodeContentTable';
import { useInnerNodeContent } from './useInnerNodeContent';

export interface InnerNodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const InnerNodeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  const { contentDataArr } = useInnerNodeContent()

  return (
    <div>
      {contentDataArr.map(([headerText, keywordData]) =>
        <NodeContentSectionWithTable nodeSchemaDataForNode={nodeSchemaDataForNode} headerText={headerText} keywordData={keywordData} />
      )}
    </div>
  );
};

const NodeContentSectionWithTable = ({ nodeSchemaDataForNode, headerText, keywordData }: NodeContentSectionWithTableProps) => {
  const { rowsData } = useRowsData(nodeSchemaDataForNode, keywordData);

  if (rowsData.length === 0) {
    return null;
  }

  return (
    <NodeContentSection headerText={headerText}>
      <NodeContentTable rowsData={rowsData} />
    </NodeContentSection>
  );
}


interface NodeContentSectionWithTableProps extends InnerNodeContentProps {
  headerText: string;
  keywordData: KeywordData;
}

export interface KeywordData {
  keywords: string[];
  keywordsToDescription: Record<string, string>;
}

const useRowsData = (nodeSchemaDataForNode: JsonSchema, keywordData: KeywordData) => {
  const { keywords, keywordsToDescription } = keywordData
  const rowsData: RowData[] = [];

  keywords.forEach((keyword) => {
    const value = nodeSchemaDataForNode[keyword];

    if (value !== undefined) {
      const description = keywordsToDescription[keyword];
      rowsData.push([description, value]);
    }
  });

  return { rowsData }
}