'use client'

import ReactFlow, {
  Background, Controls,
  useEdgesState,
  useNodesState
} from 'reactflow';

import { NodeSchemaData } from '@/app/JsonSchema/types';
import React, { createContext, useContext, useEffect } from 'react';
import 'reactflow/dist/style.css';
import { nodeTypes } from '../Nodes';
import { useLayoutedElements } from './useLayoutedElements';
import { useSchemaParser } from './useSchemaParser';

export const FlowChartWithoutProviders = () => {
  const {
    edges,
    nodes,
    nodeSchemaData,
    onEdgesChange,
    onNodesChange
  } = useFlowChartDataAndCallbacks();

  return (
    <div style={{ height: "100vh", width: "100vw", position: 'relative', pointerEvents: 'all' }}>
      <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
        <NodeSchemaDataProvider nodeSchemaData={nodeSchemaData}>
          <ReactFlow
            proOptions={{
              hideAttribution: true
            }}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        </NodeSchemaDataProvider>
      </div>
    </div >
  );
}


const useFlowChartDataAndCallbacks = () => {
  const { edges: initialEdges, nodes: initialNodes, nodeSchemaData } = useSchemaParser();
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const { layoutElements } = useLayoutedElements();

  useEffect(() => {
    layoutElements()
  }, [])

  return {
    edges,
    nodes,
    nodeSchemaData,
    onEdgesChange,
    onNodesChange
  }
}

const NodeSchemaDataContext = createContext<NodeSchemaData>({})

interface NodeSchemaDataProviderProps {
  nodeSchemaData: NodeSchemaData
  children: React.ReactNode
}

const NodeSchemaDataProvider = ({ nodeSchemaData, children }: NodeSchemaDataProviderProps) => {
  return (
    <NodeSchemaDataContext.Provider value={nodeSchemaData}>
      {children}
    </NodeSchemaDataContext.Provider>
  )
}

export const useNodeSchemaDataValue = () => {
  const nodeSchemaData = useContext(NodeSchemaDataContext)

  if (!nodeSchemaData) {
    throw new Error('Trying to access NodeSchemaData context but not a child')
  }

  return nodeSchemaData
}