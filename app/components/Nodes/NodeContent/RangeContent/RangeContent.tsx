import { InnerNodeContentProps } from "../InnerNodeContent";
import { NodeContentSection } from "../NodeContentSection";
import { NodeContentTable } from "../NodeContentTable";
import { useRangeContent } from "./useRangeContent";

export const RangeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  // A lot of this can be refactored
  const rangeContentRowData = useRangeContent(nodeSchemaDataForNode);

  if (rangeContentRowData.length === 0) {
    return null
  }

  return (
    <NodeContentSection headerText="Range">
      <NodeContentTable rowsData={rangeContentRowData} />
    </NodeContentSection>
  );
}