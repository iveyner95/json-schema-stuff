'use client';

import { GraphElementState } from './GraphElementState';
import { setupJsonSchemaTraverserInitializer } from './setupJsonSchemaTraverserInitializer';

export function parseSchema(schema: JSON | undefined) {
  const graphElementState = new GraphElementState();
  const jsonSchemaTraverserInitializer = setupJsonSchemaTraverserInitializer(
    graphElementState,
    schema
  );

  jsonSchemaTraverserInitializer.parse();

  return {
    edges: graphElementState.edges,
    nodes: graphElementState.nodes,
    nodeSchemaData: graphElementState.nodeSchemaData,
  };
}
