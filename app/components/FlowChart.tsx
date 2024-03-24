'use client'

import ReactFlow, {
  Background, Controls,
  ReactFlowProvider,
  useEdgesState,
  useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import Draft12 from '../__fixtures__/2020-12.json';
import { JsonSchemaParser } from '../JSONSchemaParser/JsonSchemaParser';

import ELK from 'elkjs/lib/elk.bundled.js';
import { useEffect } from 'react';
import { useLayoutedElements } from './useLayoutedElements';

export const elk = new ELK();

export const FlowChart = () => {
  return (
    <ReactFlowProvider>
      <FlowChartWithoutProviders />
    </ReactFlowProvider>
  );
}

const FlowChartWithoutProviders = () => {
  const { edges: initialEdges, nodes: initialNodes } = useSchemaParser();
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const { layoutElements } = useLayoutedElements();

  useEffect(() => {
    layoutElements()
  }, [])


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
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div >
  );
}


export const useSchemaParser = () => {
  const schema: JSON = Draft12 as unknown as JSON // Hardcoded for now

  const jsonSchemaParser = new JsonSchemaParser(schema)
  jsonSchemaParser.parse()

  return {
    edges: jsonSchemaParser.edges,
    nodes: jsonSchemaParser.nodes
  }
}