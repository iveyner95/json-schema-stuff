import { NodeProps } from "reactflow";
import { useNodeSchemaDataValue } from "../FlowChart/FlowChartWIthoutProviders";

export const JsonNode = ({ data, id }: NodeProps<NodePropsWithLabelData>) => {
  const { label } = data
  const nodeSchemaData = useJsonNode(id)

  return (<div></div>)
}

const useJsonNode = (id: string) => {
  const nodeSchemaData = useNodeSchemaDataValue()
  const nodeSchemaDataForId = nodeSchemaData[id];

  if (!nodeSchemaDataForId) {
    throw new Error(`Something went wrong, no schema available for node: ${id}`)
  }

  return nodeSchemaData[id]
}

interface NodeData {
  data: DataWithLabel
}
interface DataWithLabel {
  label: string
}

type NodePropsWithLabelData = Omit<NodeProps, 'data'> & NodeData