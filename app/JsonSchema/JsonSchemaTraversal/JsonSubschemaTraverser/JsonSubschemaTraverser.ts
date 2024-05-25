import { IGraphElementState } from '../../GraphElementState/types';
import { JsonSchema, JsonTraverseSchemaFn } from '../../types';
import { IJsonSubschemaTraverser } from '../types';

export class JsonSubschemaTraverser implements IJsonSubschemaTraverser {
  private graphElementState: IGraphElementState;
  private traverseSchema: JsonTraverseSchemaFn;

  constructor(graphElementState: IGraphElementState, traverseSchema: JsonTraverseSchemaFn) {
    this.graphElementState = graphElementState;
    this.traverseSchema = traverseSchema;
  }

  traverseSubschema: JsonTraverseSchemaFn = (schema: JsonSchema, sourceNodeId: string) => {
    Object.entries(schema).forEach(([key, subschema]: [string, JSON]) => {
      this.graphElementState.addNode(key, subschema);
      const lastNodeId = this.graphElementState.getLastNodeId();
      this.graphElementState.addEdge(lastNodeId, sourceNodeId);
      this.traverseSchema(subschema, lastNodeId);
    });
  };
}
