import { Edge, Node } from "reactflow";
import { LabeledObjectForNode, ObjectSubschemaKeys, SchemaTypes } from "./types";

type JsonSchema = Partial<Record<string, any>>

export class JsonSchemaParser {
  public jsonSchema: JsonSchema
  public nodes: Node[] = []
  public edges: Edge[] = []
  private nodeIdCount = 0;
  private edgeIdCount = 0;

  constructor(jsonSchema: JsonSchema) {
    this.jsonSchema = jsonSchema
  }

  parse() {
    this.parseRootNode();
    this.parseSubNodes();
  }

  // -------- Parsing Methods -------- 
  private parseRootNode() {
    this.addNode(ROOT_NODE_LABEL)
  }

  private parseSubNodes() {
    const rootNodeId = this.getLastNodeId();
    this.traverseSchema(this.jsonSchema, rootNodeId);
  }

  // -------- Traversal Methods -------- 
  private traverseSchema(schema: JsonSchema, sourceNodeId: string) {
    const subschemaKeys = this.getSubschemaKeys(schema.type as SchemaTypes)

    subschemaKeys?.forEach(subschemaKey => {
      if (this.subschemaExists(schema, subschemaKey)) {
        const subschema = schema[subschemaKey];
        this.traverseSubschema(subschema, sourceNodeId);
      }
    });
  }

  private traverseSubschema(schema: JsonSchema, sourceNodeId: string) {
    const labeledObjects: LabeledObjectForNode[] = [];

    Object.entries(schema).forEach(([key, subschema]: [string, JSON]) => {
      this.addNode(key);
      const lastNodeId = this.getLastNodeId();
      this.addEdge(lastNodeId, sourceNodeId);
      this.traverseSchema(subschema, lastNodeId);
    })

    return labeledObjects;
  }

  // -------- Graph Element Util Methods --------
  private addNode(label: string) {
    const id = 'node-id-' + this.nodeIdCount.toString();
    this.nodeIdCount += 1;
    const node: Node = { id, data: { label }, position: DEFAULT_POSITION }
    this.nodes.push(node)
  }

  private addEdge(target: string, source: string) {
    const id = 'edge-id-' + this.edgeIdCount.toString();
    this.edgeIdCount += 1;
    const edge: Edge = { id, target, source }
    this.edges.push(edge)
  }

  // -------- Util Methods --------
  private getSubschemaKeys(schemaType: SchemaTypes | SchemaTypes[]) {
    if (Array.isArray(schemaType)) {
      throw new Error('No support for multi-typed nodes')
    } else {
      return schemaTypeToSchemaKeys[schemaType]
    }
  }

  private subschemaExists(schema: JsonSchema, subschemaKey: string) {
    return Object.hasOwn(schema, subschemaKey)
  }

  private getLastNodeId = () => {
    return this.nodes[this.nodes.length - 1].id
  }
}

const ROOT_NODE_LABEL = '_root'
const DEFAULT_POSITION = { x: 0, y: 0 }

// TODO: add support for other subschema keys
const schemaTypeToSchemaKeys: Partial<Record<SchemaTypes, string[]>> = {
  [SchemaTypes.OBJECT]: ObjectSubschemaKeys
}