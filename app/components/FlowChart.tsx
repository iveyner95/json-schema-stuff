'use client'

import ReactFlow, { Background, Controls, Node } from 'reactflow';
import 'reactflow/dist/style.css';
import Draft12 from '../__fixtures__/2020-12.json';
import { JsonSchemaParser } from '../JSONSchemaParser/JsonSchemaParser';

export function FlowChart() {
  const nodes = useNodes()

  return (
    <div style={{ height: "100vh", width: "100vw", position: 'relative', pointerEvents: 'all' }}>
      <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
        <ReactFlow
          proOptions={{
            hideAttribution: true
          }}
          nodes={nodes}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div >
  );
}

const useNodes = (): Node[] => {
  const schema: JSON = Draft12 as unknown as JSON // Hardcoded for now

  const jsonSchemaParser = new JsonSchemaParser(schema)
  const nodes = jsonSchemaParser.parse()

  return nodes;
}