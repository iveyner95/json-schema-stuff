import { JsonSchemaTraverser } from '..';
import { IGraphElementState } from '../../../GraphElementState';
import { MockGraphElementState } from '../../../GraphElementState/__mocks__/MockGraphElementState';
import { JsonSubschemaTraverser } from '../../JsonSubschemaTraverser';
import { MockJsonSchemaTraverser } from '../__mocks__/MockJsonSchemaTraverser';
import { buildJsonSchemaTraverserForSchemaType } from '../SchemaTypes';

jest.mock('../../JsonSubschemaTraverser');
jest.mock('../SchemaTypes');

describe('JsonSchemaTraverser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should call generateJsonSubschemaTraverser with expected params', () => {
      const graphElementState = generateGraphElementState();

      generateJsonSchemaTraverser(graphElementState);

      const expectedGenerateJsonSubschemaTraverserValue = [graphElementState, expect.any(Function)];

      expect(JsonSubschemaTraverser).toHaveBeenCalledWith(
        ...expectedGenerateJsonSubschemaTraverserValue
      );
    });
  });

  describe('traverseSchema', () => {
    const testCases: [[string, string, string], [string, string[], string]] = [
      ['a single valid schema type', 'string', 'string'],
      ['an array of valid schema types', ['string'], 'string'],
    ];

    it.each(testCases)(
      'should call jsonSchemaTraverser with expected values when type is %s',
      (_testDescription, schemaType, schemaForTraverserValue) => {
        const mockJsonSchemaTraverser = generateMockJsonSchemaTraverser();
        const traverseSchemaSpy = jest.spyOn(mockJsonSchemaTraverser, 'traverseSchema');

        (buildJsonSchemaTraverserForSchemaType as jest.Mock).mockReturnValueOnce(
          mockJsonSchemaTraverser
        );

        const graphElementState = generateGraphElementState();

        const jsonSchemaTraverser = generateJsonSchemaTraverser(graphElementState);

        jsonSchemaTraverser.traverseSchema({ type: schemaType }, 'mockSourceNodeId');

        const expectedBuildJsonSchemaTraverserForSchemaTypeValue = [
          schemaForTraverserValue,
          expect.any(Object),
        ];
        const expectedTraverseSchemaValue = [{ type: schemaType }, 'mockSourceNodeId'];

        expect(buildJsonSchemaTraverserForSchemaType).toHaveBeenCalledWith(
          ...expectedBuildJsonSchemaTraverserForSchemaTypeValue
        );
        expect(traverseSchemaSpy).toHaveBeenCalledWith(...expectedTraverseSchemaValue);
      }
    );

    it('should not call a jsonSchemaTraverser if schema type does not map to a Traverser', () => {
      (buildJsonSchemaTraverserForSchemaType as jest.Mock).mockReturnValueOnce(undefined);

      const graphElementState = generateGraphElementState();

      const jsonSchemaTraverser = generateJsonSchemaTraverser(graphElementState);

      jsonSchemaTraverser.traverseSchema({ type: ['invalidValue'] }, 'mockSourceNodeId');

      const expectedBuildJsonSchemaTraverserForSchemaTypeValue = [
        'invalidValue',
        expect.any(Object),
      ];

      expect(buildJsonSchemaTraverserForSchemaType).toHaveBeenCalledWith(
        ...expectedBuildJsonSchemaTraverserForSchemaTypeValue
      );
    });
  });
});

function generateGraphElementState() {
  return new MockGraphElementState();
}

function generateJsonSchemaTraverser(graphElementState: IGraphElementState) {
  return new JsonSchemaTraverser(graphElementState);
}

function generateMockJsonSchemaTraverser() {
  return new MockJsonSchemaTraverser();
}
