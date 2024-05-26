import { JsonSchemaType } from '../../../../types';
import { MockJsonSubschemaTraverser } from '../../../JsonSubschemaTraverser/__mocks__/MockJsonSubschemaTraverser';
import { buildJsonSchemaTraverserForSchemaType } from '../buildJsonSchemaTraverserForSchemaType';
import { ObjectJsonSchemaTraverser } from '../ObjectJsonSchemaTraverser';

jest.mock('../ObjectJsonSchemaTraverser');

describe('buildJsonSchemaTraverserForSchemaType(...)', () => {
  it('should return instance of a ObjectJsonSchemaTraverser when schema type is Object', () => {
    const jsonSubschemaTraverser = generateMockJsonSubschemaTraverser();

    const result = buildJsonSchemaTraverserForSchemaType(
      JsonSchemaType.OBJECT,
      jsonSubschemaTraverser
    );

    expect(ObjectJsonSchemaTraverser).toHaveBeenCalledWith(jsonSubschemaTraverser);
    expect(result).toBeInstanceOf(ObjectJsonSchemaTraverser);
  });

  const testCases: [JsonSchemaType, undefined][] = [
    [JsonSchemaType.ARRAY, undefined],
    [JsonSchemaType.BOOLEAN, undefined],
    [JsonSchemaType.INTEGER, undefined],
    [JsonSchemaType.NULL, undefined],
    [JsonSchemaType.STRING, undefined],
  ];

  it.each(testCases)(
    'it should return undefined value when passed JsonSchemaType. %s',
    (jsonSchemaType, expectedReturnValue) => {
      const jsonSubschemaTraverser = generateMockJsonSubschemaTraverser();

      const result = buildJsonSchemaTraverserForSchemaType(jsonSchemaType, jsonSubschemaTraverser);

      expect(result).toBe(expectedReturnValue);
    }
  );
});

function generateMockJsonSubschemaTraverser() {
  return new MockJsonSubschemaTraverser();
}
