'use client';

import { JsonSchemaTraverser } from '@/app/JsonSchema/JsonSchemaTraversal/JsonSchemaTraverser';
import Draft12 from '../../__fixtures__/2020-12.json';
import { GraphElementState } from '../../JsonSchema/GraphElementState';
import { JsonSchemaTraverserInitializer } from '../../JsonSchema/JsonSchemaTraverserInitializer';

export const useSchemaParser = () => {
  const schema: JSON = Draft12 as unknown as JSON; // Hardcoded for now

  // TODO: memoize this?
  const graphElementState = new GraphElementState();
  const jsonSchemaTraverser = new JsonSchemaTraverser({ graphElementState });
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
