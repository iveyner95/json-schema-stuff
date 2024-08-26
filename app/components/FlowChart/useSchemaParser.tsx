'use client';

import { JsonSchemaTraverser } from '@/app/JsonSchema/JsonSchemaTraversal/JsonSchemaTraverser';
import { GraphElementState } from '../../JsonSchema/GraphElementState';
import { JsonSchemaTraverserInitializer } from '../../JsonSchema/JsonSchemaTraverserInitializer';

export const useSchemaParser = (schema?: JSON) => {
  const graphElementState = new GraphElementState();
  const jsonSchemaTraverser = new JsonSchemaTraverser(graphElementState);
  const jsonSchemaTraverserInitializer = new JsonSchemaTraverserInitializer(
    schema,
    graphElementState,
    jsonSchemaTraverser
  );
  jsonSchemaTraverserInitializer.parse();

  return {
    edges: graphElementState.edges,
    nodes: graphElementState.nodes,
    nodeSchemaData: graphElementState.nodeSchemaData,
  };
};
