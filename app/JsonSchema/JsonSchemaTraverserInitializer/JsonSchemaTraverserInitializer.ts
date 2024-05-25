import { IGraphElementState } from '../GraphElementState';
import { JsonSchemaTraverser } from '../JsonSchemaTraversal';
import { JsonSchema } from '../types';

export class JsonSchemaTraverserInitializer {
  private jsonSchema: JsonSchema;
  private graphElementState: IGraphElementState;
  private jsonSchemaTraverser: JsonSchemaTraverser;

  constructor(
    jsonSchema: JsonSchema,
    graphElementState: IGraphElementState,
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
