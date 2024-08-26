'use client';
import { useEffect } from 'react';
import { useEdgesState, useNodesState } from 'reactflow';
import { useLayoutedElements } from './useLayoutedElements';
import { useSchemaParser } from './useSchemaParser';

export const useFlowChartDataAndCallbacks = (schema?: JSON) => {
  if (!schema) {
    return {
      edges: [],
      nodes: [],
      nodeSchemaData: {},
      onEdgesChange: () => { },
      onNodesChange: () => { },
    }
  }

  const { edges: initialEdges, nodes: initialNodes, nodeSchemaData } = useSchemaParser(schema);
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
