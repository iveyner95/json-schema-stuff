'use client'

import ReactFlow, {
  Background, Controls, Node,
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
  // TODO: re-enable after creating edges from fixture
  // const nodes = useNodes()
  const [nodes, , onNodesChange] = useNodesState(initialNodesFixture);
  const [edges, , onEdgesChange] = useEdgesState(initialEdgesFixture);
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

export const useNodes = (): Node[] => {
  const schema: JSON = Draft12 as unknown as JSON // Hardcoded for now

  const jsonSchemaParser = new JsonSchemaParser(schema)
  const nodes = jsonSchemaParser.parse()

  return nodes;
}

const initialNodesFixture = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input' },
    position: { x: 0, y: 0 },
  },
  {
    id: '2',
    data: { label: 'node 2' },
    position: { x: 0, y: 100 },
  },
  {
    id: '2a',
    data: { label: 'node 2a' },
    position: { x: 0, y: 200 },
  },
  {
    id: '2b',
    data: { label: 'node 2b' },
    position: { x: 0, y: 300 },
  },
  {
    id: '2c',
    data: { label: 'node 2c' },
    position: { x: 0, y: 400 },
  },
  {
    id: '2d',
    data: { label: 'node 2d' },
    position: { x: 0, y: 500 },
  },
  {
    id: '3',
    data: { label: 'node 3' },
    position: { x: 200, y: 100 },
  },
];

const initialEdgesFixture = [
  { id: 'e12', source: '1', target: '2' },
  { id: 'e13', source: '1', target: '3' },
  { id: 'e22a', source: '2', target: '2a' },
  { id: 'e22b', source: '2', target: '2b' },
  { id: 'e22c', source: '2', target: '2c' },
  { id: 'e2c2d', source: '2c', target: '2d' },
];