'use client'

import ReactFlow, {
  Background, Controls,
  useEdgesState,
  useNodesState
} from 'reactflow';

import { useEffect } from 'react';
import 'reactflow/dist/style.css';
import { nodeTypes } from '../Nodes';
import { useLayoutedElements } from './useLayoutedElements';
import { useSchemaParser } from './useSchemaParser';

export const FlowChartWithoutProviders = () => {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange
  } = useFlowChartDataAndFns();

  return (
    <div style={{ height: "100vh", width: "100vw", position: 'relative', pointerEvents: 'all' }}>
      <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
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
      </div>
    </div >
  );
}


const useFlowChartDataAndFns = () => {
  const { edges: initialEdges, nodes: initialNodes } = useSchemaParser();
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const { layoutElements } = useLayoutedElements();

  useEffect(() => {
    layoutElements()
  }, [])

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange
  }
}