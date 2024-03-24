import { Node } from "reactflow";
import { LabeledObjectForNode, SchemaSubschemaKeys } from "./types";

type JsonSchema = Partial<Record<string, any>>

export class JsonSchemaParser {
  public jsonSchema: JsonSchema

  constructor(jsonSchema: JsonSchema) {
    this.jsonSchema = jsonSchema
  }

  parse(): Node[] {
    const nodes: Node[] = []

    const rootNode: Node = this.generateRootNode();
    nodes.push(rootNode)
    const subNodes = this.generateSubNodes();
    nodes.push(...subNodes)

    return nodes
  }

  private generateRootNode(): Node {
    const id = '1';
    const label = '_root'

    return this.generateNode(id, label)
  }

  private generateSubNodes(): Node[] {
    const labeledObjectsFromSchemaKeys = this.getLabeledObjectsFromSchemaKeys(this.jsonSchema);
    const nodes = this.generateNodesFromLabeledObjects(labeledObjectsFromSchemaKeys);
    return nodes
  }

  private generateNodesFromLabeledObjects(labeledObjects: LabeledObjectForNode[]) {
    const nodes: Node[] = [];

    const nodesFromLabeledObjects = labeledObjects.map((labeledObject, index) => {
      const indexForNodeGeneration = (index + 2).toString();
      return this.generateNode(indexForNodeGeneration, labeledObject.label);
    });

    nodes.push(...nodesFromLabeledObjects);
    return nodes;
  }

  private getLabeledObjectsFromSchemaKeys(schema: JsonSchema): LabeledObjectForNode[] {
    const labeledObjects: LabeledObjectForNode[] = [];
    const subschemaKeys = Object.values(SchemaSubschemaKeys);

    subschemaKeys.forEach(subschemaKey => {
      if (this.subschemaExists(schema, subschemaKey)) {
        const subschema = this.getSubschema(schema, subschemaKey);
        const labeledObjectsFromSubschema: LabeledObjectForNode[] = this.traverseSubschema(subschema);
        labeledObjects.push(...labeledObjectsFromSubschema);
      }
    });

    return labeledObjects
  }


  private getSubschema(schema: JsonSchema, subschemaKey: SchemaSubschemaKeys): JsonSchema {
    return schema[`${subschemaKey}`];
  }

  private traverseSubschema(schema: JsonSchema) {
    const labeledObjects: LabeledObjectForNode[] = [];

    Object.entries(schema).forEach(([key, subschema]: [string, JSON]) => {
      const labeledObject = { label: key };
      labeledObjects.push(labeledObject);
      const labeledObjectsFromSchemaKeys = this.getLabeledObjectsFromSchemaKeys(subschema);
      labeledObjects.push(...labeledObjectsFromSchemaKeys)
    })

    return labeledObjects;
  }

  private generateNode(id: string, label: string): Node {
    return (
      { id, data: { label }, position: DEFAULT_POSITION }
    )
  }

  private subschemaExists(schema: JsonSchema, subschemaKey: SchemaSubschemaKeys) {
    return Object.hasOwn(schema, subschemaKey)
  }
}

const DEFAULT_POSITION = { x: 0, y: 0 }

