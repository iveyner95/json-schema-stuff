import { useContext } from "react"
import { NodeSchemaDataContext } from "./NodeSchemaDataContext"

export const useNodeSchemaDataValue = () => {
  const nodeSchemaData = useContext(NodeSchemaDataContext)

  if (!nodeSchemaData) {
    throw new Error('Trying to access NodeSchemaData context but not a child')
  }

  return nodeSchemaData
}