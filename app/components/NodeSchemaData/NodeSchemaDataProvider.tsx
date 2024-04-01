import { NodeSchemaData } from '@/app/JsonSchema/types';
import { NodeSchemaDataContext } from './NodeSchemaDataContext';

interface NodeSchemaDataProviderProps {
  nodeSchemaData: NodeSchemaData
  children: React.ReactNode
}

export const NodeSchemaDataProvider = ({ nodeSchemaData, children }: NodeSchemaDataProviderProps) => {
  return (
    <NodeSchemaDataContext.Provider value={nodeSchemaData}>
      {children}
    </NodeSchemaDataContext.Provider>
  )
}