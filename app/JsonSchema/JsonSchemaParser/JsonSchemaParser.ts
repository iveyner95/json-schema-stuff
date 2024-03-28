import { Edge, Node } from "reactflow";
import { GlobalJsonSchemaTraverser } from "../JsonSchemaTraversal/GlobalJsonSchemaTraverser";
import { GlobalJsonSchemaTraverserArgs } from "../JsonSchemaTraversal/types";
import {
  AddEdgeFn,
  AddNodeFn,
  JsonSchema,
  NodeSchemaData
} from '../types';

export class JsonSchemaParser {
  public jsonSchema: JsonSchema
  public nodes: Node[] = []
  public edges: Edge[] = []
  public nodeSchemaData: NodeSchemaData = {}
  private nodeIdCount = 0;
  private edgeIdCount = 0;

  constructor(jsonSchema: JsonSchema) {
    this.jsonSchema = jsonSchema
  }

  parse() {
    this.addRootNode();
    this.traverseSchema();
  }

  // -------- Parsing Methods -------- 
  private addRootNode() {
    this.addNode(ROOT_NODE_LABEL, this.jsonSchema)
  }

  private traverseSchema() {
    const rootNodeId = this.getLastNodeId();
    const globalJsonSchemaTraverserArgs = this.buildGlobalJsonSchemaTraverserArgs();
    const globalJsonSchemaTraverser = new GlobalJsonSchemaTraverser(globalJsonSchemaTraverserArgs)
    globalJsonSchemaTraverser.traverseSchema(this.jsonSchema, rootNodeId)
  }

  // -------- Parsing Util Methods --------
  private buildGlobalJsonSchemaTraverserArgs(): GlobalJsonSchemaTraverserArgs {
    return {
      addNode: this.addNode,
      addEdge: this.addEdge,
      getLastNodeId: this.getLastNodeId,
    }
  }

  // -------- Graph Element Methods --------
  private addNode: AddNodeFn = (label: string, jsonSchema: JsonSchema) => {
    const id = 'node-id-' + this.nodeIdCount.toString();
    this.nodeIdCount += 1;
    const node: Node = { id, data: { label }, position: DEFAULT_POSITION, type: 'jsonNode' };
    this.nodes.push(node);
    this.nodeSchemaData[id] = jsonSchema;
  }

  private addEdge: AddEdgeFn = (target: string, source: string) => {
    const id = 'edge-id-' + this.edgeIdCount.toString();
    this.edgeIdCount += 1;
    const edge: Edge = { id, target, source }
    this.edges.push(edge)
  }

  private getLastNodeId = () => {
    return this.nodes[this.nodes.length - 1].id
  }
}

const ROOT_NODE_LABEL = '_root'
const DEFAULT_POSITION = { x: 0, y: 0 }

