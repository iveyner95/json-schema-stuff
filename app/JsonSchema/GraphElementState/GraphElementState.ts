import { Edge, Node } from 'reactflow';
import { AddEdgeFn, AddNodeFn, JsonSchema, NodeSchemaData } from '../types';
import { IGraphElementState } from './types';

export class GraphElementState implements IGraphElementState {
  public nodeSchemaData: NodeSchemaData = {};
  public nodes: Node[] = [];
  public edges: Edge[] = [];
  private nodeIdCount = 0;
  private edgeIdCount = 0;

  public addNode: AddNodeFn = (label: string, jsonSchema: JsonSchema) => {
    const id = 'node-id-' + this.nodeIdCount.toString();
    this.nodeIdCount += 1;
    const node: Node = { id, data: { label }, position: DEFAULT_POSITION, type: 'jsonNode' };
    this.nodes.push(node);
    this.nodeSchemaData[id] = jsonSchema;
  };

  public addEdge: AddEdgeFn = (target: string, source: string) => {
    const id = 'edge-id-' + this.edgeIdCount.toString();
    this.edgeIdCount += 1;
    const edge: Edge = { id, target, source };
    this.edges.push(edge);
  };

  public getLastNodeId() {
    return this.nodes[this.nodes.length - 1].id;
  }
}

export const DEFAULT_POSITION = { x: 0, y: 0 };
