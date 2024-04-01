import { JsonSchema } from "@/app/JsonSchema"

interface NodeContentProps {
  nodeSchemaDataForNode: JsonSchema
}

export const NodeContent = ({ nodeSchemaDataForNode }: NodeContentProps) => {
  console.log({ nodeSchemaDataForNode })

  return (
    <div className="p-3">
      <div className="">
        Properties...
      </div>
    </div>
  )
}