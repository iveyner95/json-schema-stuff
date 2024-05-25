import { IGraphElementState } from '../../GraphElementState';
import { MockGraphElementState } from '../../GraphElementState/__mocks__/MockGraphElementState';
import { MockJsonTraverser } from '../__mocks__/MockJsonSchemaTraverser';
import { JsonSchemaTraverser } from '../JsonSchemaTraverser';
import { JsonSubschemaTraverser } from '../JsonSubschemaTraverser';
import { buildJsonSchemaTraverserForSchemaType } from '../SchemaTypes';

jest.mock('../JsonSubschemaTraverser');
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
    it('with single schema type it should call expected jsonSchemaTraverser', () => {
      const mockJsonSchemaTraverser = generateMockJsonSchemaTraverser();
      const traverseSchemaSpy = jest.spyOn(mockJsonSchemaTraverser, 'traverseSchema');

      (buildJsonSchemaTraverserForSchemaType as jest.Mock).mockReturnValueOnce(
        mockJsonSchemaTraverser
      );

      const graphElementState = generateGraphElementState();

      const jsonSchemaTraverser = generateJsonSchemaTraverser(graphElementState);

      jsonSchemaTraverser.traverseSchema({ type: 'string' }, 'mockSourceNodeId');

      const expectedBuildJsonSchemaTraverserForSchemaTypeValue = ['string', expect.any(Object)];
      const expectedTraverseSchemaValue = [{ type: 'string' }, 'mockSourceNodeId'];

      expect(buildJsonSchemaTraverserForSchemaType).toHaveBeenCalledWith(
        ...expectedBuildJsonSchemaTraverserForSchemaTypeValue
      );
      expect(traverseSchemaSpy).toHaveBeenCalledWith(...expectedTraverseSchemaValue);
    });

    it('with array of schema types it should call expected jsonSchemaTraverser', () => {
      const mockJsonSchemaTraverser = generateMockJsonSchemaTraverser();
      const traverseSchemaSpy = jest.spyOn(mockJsonSchemaTraverser, 'traverseSchema');

      (buildJsonSchemaTraverserForSchemaType as jest.Mock).mockReturnValueOnce(
        mockJsonSchemaTraverser
      );

      const graphElementState = generateGraphElementState();

      const jsonSchemaTraverser = generateJsonSchemaTraverser(graphElementState);

      jsonSchemaTraverser.traverseSchema({ type: ['string'] }, 'mockSourceNodeId');

      const expectedBuildJsonSchemaTraverserForSchemaTypeValue = ['string', expect.any(Object)];
      const expectedTraverseSchemaValue = [{ type: ['string'] }, 'mockSourceNodeId'];

      expect(buildJsonSchemaTraverserForSchemaType).toHaveBeenCalledWith(
        ...expectedBuildJsonSchemaTraverserForSchemaTypeValue
      );
      expect(traverseSchemaSpy).toHaveBeenCalledWith(...expectedTraverseSchemaValue);
    });

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
  return new MockJsonTraverser();
}
