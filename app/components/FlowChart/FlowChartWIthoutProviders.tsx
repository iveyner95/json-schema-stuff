'use client';

import ReactFlow, { Background, Controls } from 'reactflow';

import 'reactflow/dist/style.css';
import { nodeTypes } from '../Nodes';
import { NodeSchemaDataProvider } from '../NodeSchemaData';
import { useFlowChartDataAndCallbacks } from './useFlowChartDataAndCallbacks';

export const FlowChartWithoutProviders = () => {
  const { edges, nodes, nodeSchemaData, onEdgesChange, onNodesChange } =
    useFlowChartDataAndCallbacks();

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', pointerEvents: 'all' }}>
      <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
        <NodeSchemaDataProvider nodeSchemaData={nodeSchemaData}>
          <ReactFlow
            proOptions={{
              hideAttribution: true,
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
    </div>
  );
};
