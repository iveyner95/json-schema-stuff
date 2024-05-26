import { Edge, Node } from 'reactflow';
import { JsonSchema, NodeSchemaData } from '../types';

export interface IGraphElementState {
  nodeSchemaData: NodeSchemaData;
  nodes: Node[];
  edges: Edge[];
  addNode: AddNodeFn;
  addEdge: AddEdgeFn;
  getLastNodeId: GetLastNodeIdFn;
}

type AddNodeFn = (label: string, jsonSchema: JsonSchema) => void;
type AddEdgeFn = (target: string, source: string) => void;
type GetLastNodeIdFn = () => string;
