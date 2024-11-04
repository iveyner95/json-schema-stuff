'use client';

import { IGraphElementState } from './GraphElementState';
import { JsonSchemaTraverser } from './JsonSchemaTraversal';
import { JsonSchemaTraverserInitializer } from './JsonSchemaTraverserInitializer';

export const setupJsonSchemaTraverserInitializer = (
  graphElementState: IGraphElementState,
  schema?: JSON
) => {
  const jsonSchemaTraverser = new JsonSchemaTraverser(graphElementState);
  const jsonSchemaTraverserInitializer = new JsonSchemaTraverserInitializer(
    schema,
    graphElementState,
    jsonSchemaTraverser
  );

  return jsonSchemaTraverserInitializer;
};
