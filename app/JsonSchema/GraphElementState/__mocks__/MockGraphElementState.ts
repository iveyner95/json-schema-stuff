import { IGraphElementState } from '../types';

export class MockGraphElementState implements IGraphElementState {
  public nodes = [];
  public edges = [];
  public nodeSchemaData = {};
  public addNode = jest.fn();
  public addEdge = jest.fn();
  public getLastNodeId = jest.fn();
}
