'use client'

import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

export function FlowChart() {
  return (
    <div style={{ height: "100vh", width: "100vw", position: 'relative', pointerEvents: 'all' }}>
      <div style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }}>
        <ReactFlow
          proOptions={{
            hideAttribution: true
          }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div >
  );
}

