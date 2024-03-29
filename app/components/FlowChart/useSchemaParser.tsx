'use client';

import Draft12 from '../../__fixtures__/2020-12.json';
import { JsonSchemaParser } from '../../JsonSchema/JsonSchemaParser';

export const useSchemaParser = () => {
  const schema: JSON = Draft12 as unknown as JSON; // Hardcoded for now

  // TODO: memoize this?
  const jsonSchemaParser = new JsonSchemaParser(schema);
  jsonSchemaParser.parse();

  return {
    edges: jsonSchemaParser.edges,
    nodes: jsonSchemaParser.nodes,
    nodeSchemaData: jsonSchemaParser.nodeSchemaData,
  };
};
