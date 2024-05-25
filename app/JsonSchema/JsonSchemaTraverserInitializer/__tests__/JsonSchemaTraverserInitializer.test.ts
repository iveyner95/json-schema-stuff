import { IGraphElementState } from '../../GraphElementState';
import { MockGraphElementState } from '../../GraphElementState/__mocks__/MockGraphElementState';
import { JsonSchemaTraverser } from '../../JsonSchemaTraversal/JsonSchemaTraverser';
import { MockJsonTraverser } from '../../JsonSchemaTraversal/__mocks__/MockJsonSchemaTraverser';
import { JsonSchemaTraverserInitializer } from '../JsonSchemaTraverserInitializer';
import jsonSchemaFixture from '../__fixtures__/jsonSchemaFixture.json';

describe('JsonSchemaTraverserInitializer', () => {
  describe('parse(...)', () => {
    it('should add the root node to the list of nodes', () => {
      const graphElementState = generateGraphElementState();
      const addNodeSpy = jest.spyOn(graphElementState, 'addNode');
      const jsonSchemaTraverser = generateJsonSchemaTraverser();
      const jsonSchemaTraverserInitializer = generateJsonSchemaParser(
        graphElementState,
        jsonSchemaTraverser
      );

      jsonSchemaTraverserInitializer.parse();

      const expectedValues = [
        '_root',
        {
          $id: 'https://example.com/complex-object.schema.json',
          $schema: 'https://json-schema.org/draft/2020-12/schema',
          properties: { name: { type: 'string' } },
          required: ['name'],
          title: 'Simple Object',
          type: 'object',
        },
      ];
      expect(addNodeSpy).toHaveBeenCalledWith(...expectedValues);
    });

    it('should start the json schema traversal', () => {
      const graphElementState = generateGraphElementState();
      const getLastNodeIdSpy = jest.spyOn(graphElementState, 'getLastNodeId');
      const jsonSchemaTraverser = generateJsonSchemaTraverser();
      const traverseSchemaSpy = jest.spyOn(jsonSchemaTraverser, 'traverseSchema');
      const jsonSchemaTraverserInitializer = generateJsonSchemaParser(
        graphElementState,
        jsonSchemaTraverser
      );

      jsonSchemaTraverserInitializer.parse();

      expect(getLastNodeIdSpy).toHaveBeenCalledTimes(1);

      const expectedTraverseSchemaSpyValue = [
        {
          $id: 'https://example.com/complex-object.schema.json',
          $schema: 'https://json-schema.org/draft/2020-12/schema',
          properties: { name: { type: 'string' } },
          required: ['name'],
          title: 'Simple Object',
          type: 'object',
        },
        undefined,
      ];

      expect(traverseSchemaSpy).toHaveBeenCalledWith(...expectedTraverseSchemaSpyValue);
    });
  });
});

function generateJsonSchemaParser(
  graphElementState: IGraphElementState,
  jsonSchemaTraverser: JsonSchemaTraverser
) {
  return new JsonSchemaTraverserInitializer(
    jsonSchemaFixture,
    graphElementState,
    jsonSchemaTraverser
  );
}

function generateGraphElementState() {
  return new MockGraphElementState();
}

function generateJsonSchemaTraverser() {
  return new MockJsonTraverser() as unknown as JsonSchemaTraverser;
}
