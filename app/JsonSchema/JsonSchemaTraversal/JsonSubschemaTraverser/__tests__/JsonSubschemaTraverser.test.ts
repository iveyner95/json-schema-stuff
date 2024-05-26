import { MockGraphElementState } from '../../../GraphElementState/__mocks__/MockGraphElementState';
import { IGraphElementState } from '../../../GraphElementState/types';
import { JsonSubschemaTraverser } from '../JsonSubschemaTraverser';

const traverseSchemaMock = jest.fn();

describe('JsonSubschemaTraverser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('traverseSubschema', () => {
    it('should call expected dependencies with expected values', () => {
      const graphElementState = generateGraphElementState();
      const addNodeSpy = jest.spyOn(graphElementState, 'addNode');
      const addEdgeSpy = jest.spyOn(graphElementState, 'addEdge');
      (graphElementState.getLastNodeId as jest.Mock).mockReturnValueOnce('lastNodeIdString');

      const jsonSubschemaTraverser = generateJsonSubschemaTraverser(graphElementState);

      jsonSubschemaTraverser.traverseSubschema({ key: { subkey: 'value' } }, 'sourceNodeIdString');

      const expectedAddNodeValue = ['key', { subkey: 'value' }];
      const expectedAddEdgeValue = ['lastNodeIdString', 'sourceNodeIdString'];
      const expectedTraverseSchemaValue = [{ subkey: 'value' }, 'lastNodeIdString'];

      expect(addNodeSpy).toHaveBeenCalledWith(...expectedAddNodeValue);
      expect(addEdgeSpy).toHaveBeenCalledWith(...expectedAddEdgeValue);
      expect(traverseSchemaMock).toHaveBeenCalledWith(...expectedTraverseSchemaValue);
    });
  });
});

function generateJsonSubschemaTraverser(mockGraphElementState: IGraphElementState) {
  return new JsonSubschemaTraverser(mockGraphElementState, traverseSchemaMock);
}

function generateGraphElementState() {
  return new MockGraphElementState();
}
