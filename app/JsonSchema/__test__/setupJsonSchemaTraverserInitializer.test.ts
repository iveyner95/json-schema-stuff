import { MockGraphElementState } from '../GraphElementState/__mocks__/MockGraphElementState';
import { MockJsonSchemaTraverser } from '../JsonSchemaTraversal/JsonSchemaTraverser/__mocks__/MockJsonSchemaTraverser';
import { MockJsonSchemaTraverserInitializer } from '../JsonSchemaTraverserInitializer/__mocks__/MockJsonSchemaTraverserInitializer';
import { setupJsonSchemaTraverserInitializer } from '../setupJsonSchemaTraverserInitializer';

jest.mock('../JsonSchemaTraversal', () => ({
  JsonSchemaTraverser: MockJsonSchemaTraverser,
}));

jest.mock('../JsonSchemaTraverserInitializer', () => ({
  JsonSchemaTraverserInitializer: MockJsonSchemaTraverserInitializer,
}));

describe('setupJsonSchemaTraverserInitializer', () => {
  const testCases: [string, JSON | undefined][] = [
    ['no schema provided', undefined],
    ['schema provided', {} as JSON],
  ];

  it.each(testCases)('should return expected values when %s', (_, schema) => {
    const mockGraphElementState = new MockGraphElementState();
    const result = setupJsonSchemaTraverserInitializer(mockGraphElementState, schema);

    expect(result).toBeInstanceOf(MockJsonSchemaTraverserInitializer);
  });
});
