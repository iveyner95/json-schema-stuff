import { GraphElementState } from '../GraphElementState';
import { JsonSchemaTraverser } from '../JsonSchemaTraversal/JsonSchemaTraverser';
import { JsonSchema } from '../types';

export class JsonSchemaTraverserInitializer {
  private jsonSchema: JsonSchema;
  private graphElementState: GraphElementState;
  private jsonSchemaTraverser: JsonSchemaTraverser;

  constructor(
    jsonSchema: JsonSchema,
    graphElementState: GraphElementState,
    jsonSchemaTraverser: JsonSchemaTraverser
  ) {
    this.jsonSchema = jsonSchema;
    this.graphElementState = graphElementState;
    this.jsonSchemaTraverser = jsonSchemaTraverser;
  }

  parse() {
    this.addRootNode();
    this.traverseSchema();
  }

  private addRootNode() {
    this.graphElementState.addNode(ROOT_NODE_LABEL, this.jsonSchema);
  }

  private traverseSchema() {
    const rootNodeId = this.graphElementState.getLastNodeId();
    this.jsonSchemaTraverser.traverseSchema(this.jsonSchema, rootNodeId);
  }
}

const ROOT_NODE_LABEL = '_root';
