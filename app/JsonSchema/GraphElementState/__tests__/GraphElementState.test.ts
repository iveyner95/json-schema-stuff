import { Edge, Node } from 'reactflow';
import { GraphElementState } from '../GraphElementState';

describe('GraphElementState', () => {
  describe('addNode(...)', () => {
    it('should add expected node', () => {
      const graphElementState = generateGraphElementState();

      graphElementState.addNode('TEST_LABEL', {});

      const expectedNodes: Node[] = [
        {
          data: {
            label: 'TEST_LABEL',
          },
          id: 'node-id-0',
          position: {
            x: 0,
            y: 0,
          },
          type: 'jsonNode',
        },
      ];
      expect(graphElementState.nodes).toStrictEqual(expectedNodes);
      expect(graphElementState.nodeSchemaData).toStrictEqual({ 'node-id-0': {} });
    });
  });

  describe('addEdge(...)', () => {
    it('should add expected edge to list of edges', () => {
      const graphElementState = generateGraphElementState();

      graphElementState.addEdge('TEST_TARGET', 'TEST_SOURCE');

      const expectedEdges: Edge[] = [
        { id: 'edge-id-0', source: 'TEST_SOURCE', target: 'TEST_TARGET' },
      ];
      expect(graphElementState.edges).toStrictEqual(expectedEdges);
    });
  });

  describe('getLastNodeId(...)', () => {
    it('should return expected node from list of nodes', () => {
      const graphElementState = generateGraphElementState();
      addNodesToGraphElementState(graphElementState);

      const actualLastNodeId = graphElementState.getLastNodeId();

      expect(actualLastNodeId).toBe('node-id-1');
    });
  });
});

function generateGraphElementState() {
  return new GraphElementState();
}

function addNodesToGraphElementState(graphElementState: GraphElementState) {
  graphElementState.nodes = [
    {
      data: {
        label: 'TEST_LABEL1',
      },
      id: 'node-id-0',
      position: {
        x: 0,
        y: 0,
      },
      type: 'jsonNode',
    },
    {
      data: {
        label: 'TEST_LABEL2',
      },
      id: 'node-id-1',
      position: {
        x: 0,
        y: 0,
      },
      type: 'jsonNode',
    },
  ];
}
