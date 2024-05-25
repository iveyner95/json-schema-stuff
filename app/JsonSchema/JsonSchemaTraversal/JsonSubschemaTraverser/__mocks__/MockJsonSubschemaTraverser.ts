import { IJsonSubschemaTraverser } from '../../types';

export class MockJsonSubschemaTraverser implements IJsonSubschemaTraverser {
  traverseSubschema = jest.fn();
}
