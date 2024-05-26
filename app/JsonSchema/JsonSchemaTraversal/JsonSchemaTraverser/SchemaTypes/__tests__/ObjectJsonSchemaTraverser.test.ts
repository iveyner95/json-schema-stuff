import { MockJsonSubschemaTraverser } from '../../../JsonSubschemaTraverser/__mocks__/MockJsonSubschemaTraverser';
import { IJsonSubschemaTraverser } from '../../../types';
import { ObjectJsonSchemaTraverser } from '../ObjectJsonSchemaTraverser';
import { ObjectSubschemaKeyValues } from '../types';
import { subschemaExists } from '../utils';

jest.mock('../utils');

describe('ObjectJsonSchemaTraverser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('for valid keyword', () => {
    const testCases = [
      ObjectSubschemaKeyValues.PROPERTIES,
      ObjectSubschemaKeyValues.PATTERN_PROPERTIES,
      ObjectSubschemaKeyValues.PROPERTY_NAMES,
    ];

    it.each(testCases)('%s should call subschemaExists fn', (subschema) => {
      const jsonSubschemaTraverser = generateMockJsonSubschemaTraverser();
      const objectJsonSchemaTraverser = generateObjectJsonSchemaTraverser(jsonSubschemaTraverser);

      objectJsonSchemaTraverser.traverseSchema(
        { [`${subschema}`]: { key: 'value' } },
        'sourceNodeId'
      );

      expect(subschemaExists).toHaveBeenCalled();
    });

    it.each(testCases)('should traverse subschema', (subschema) => {
      const jsonSubschemaTraverser = generateMockJsonSubschemaTraverser();
      const traverseSubschemaSpy = jest.spyOn(jsonSubschemaTraverser, 'traverseSubschema');

      const objectJsonSchemaTraverser = generateObjectJsonSchemaTraverser(jsonSubschemaTraverser);

      (subschemaExists as jest.Mock).mockReturnValue(true);

      objectJsonSchemaTraverser.traverseSchema(
        { [`${subschema}`]: { key: 'value' } },
        'sourceNodeId'
      );

      const expectedTraverseSubschemaValue = [{ key: 'value' }, 'sourceNodeId'];

      expect(traverseSubschemaSpy).toHaveBeenCalledWith(...expectedTraverseSubschemaValue);
    });
  });

  describe('additionalProperties', () => {
    it('should traverse subschema when JsonSchema exists', () => {
      const jsonSubschemaTraverser = generateMockJsonSubschemaTraverser();
      const traverseSubschemaSpy = jest.spyOn(jsonSubschemaTraverser, 'traverseSubschema');

      const objectJsonSchemaTraverser = generateObjectJsonSchemaTraverser(jsonSubschemaTraverser);

      (subschemaExists as jest.Mock).mockReturnValue(true);

      objectJsonSchemaTraverser.traverseSchema(
        { additionalProperties: { key: 'value' } },
        'sourceNodeId'
      );

      const expectedTraverseSubschemaValue = [{ key: 'value' }, 'sourceNodeId'];

      expect(traverseSubschemaSpy).toHaveBeenCalledWith(...expectedTraverseSubschemaValue);
    });

    it('should not traverse subschema when additionalProperties is false', () => {
      const jsonSubschemaTraverser = generateMockJsonSubschemaTraverser();
      const traverseSubschemaSpy = jest.spyOn(jsonSubschemaTraverser, 'traverseSubschema');

      const objectJsonSchemaTraverser = generateObjectJsonSchemaTraverser(jsonSubschemaTraverser);

      (subschemaExists as jest.Mock).mockReturnValue(true);

      objectJsonSchemaTraverser.traverseSchema({ additionalProperties: false }, 'sourceNodeId');

      // Called 3 times due to mocking and calling in previous private method.
      expect(traverseSubschemaSpy).toHaveBeenCalledTimes(3);
    });
  });
});

function generateMockJsonSubschemaTraverser() {
  return new MockJsonSubschemaTraverser();
}

function generateObjectJsonSchemaTraverser(jsonSubschemaTraverser: IJsonSubschemaTraverser) {
  return new ObjectJsonSchemaTraverser(jsonSubschemaTraverser);
}
