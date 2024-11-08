'use client';

import { useEffect } from 'react';
import { useEdgesState, useNodesState } from 'reactflow';
import { parseSchema } from '../../JsonSchema';
import { useLayoutedElements } from './useLayoutedElements';

export const useFlowChartDataAndCallbacks = (schema?: JSON) => {
  const { edges: initialEdges, nodes: initialNodes, nodeSchemaData } = parseSchema(schema);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const { layoutElements } = useLayoutedElements();

  useEffect(() => {
    layoutElements();
  }, []);

  return {
    edges,
    nodes,
    nodeSchemaData,
    onEdgesChange,
    onNodesChange,
  };
};
