import { Edge, Node } from 'reactflow';
import { AddEdgeFn, AddNodeFn, NodeSchemaData } from '../types';

export interface IGraphElementState {
  nodeSchemaData: NodeSchemaData;
  nodes: Node[];
  edges: Edge[];
  addNode: AddNodeFn;
  addEdge: AddEdgeFn;
  getLastNodeId: () => string;
}
