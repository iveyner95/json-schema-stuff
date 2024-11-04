import { MockGraphElementState } from '../GraphElementState/__mocks__/MockGraphElementState';
import { parseSchema } from '../parseSchema';

jest.mock('../GraphElementState', () => ({
  GraphElementState: MockGraphElementState,
}));

jest.mock('../setupJsonSchemaTraverserInitializer', () => ({
  setupJsonSchemaTraverserInitializer: () => ({
    parse: jest.fn(),
  }),
}));

describe('parseSchema', () => {
  const testCases: [string, JSON | undefined][] = [
    ['no schema provided', undefined],
    ['schema provided', {} as JSON],
  ];

  it.each(testCases)('should return expected values when %s', (_, schema) => {
    const result = parseSchema(schema);

    expect(result).toHaveProperty('edges');
    expect(result).toHaveProperty('nodes');
    expect(result).toHaveProperty('nodeSchemaData');
  });
});
