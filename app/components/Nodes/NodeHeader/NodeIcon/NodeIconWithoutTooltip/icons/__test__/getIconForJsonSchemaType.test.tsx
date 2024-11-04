import { JsonSchemaType } from '../../../../../../../JsonSchema';
import { getIconForJsonSchemaType } from '../getIconForJsonSchemaType';

describe('getIconForJsonSchemaType', () => {
  const testCases: JsonSchemaType[] = [
    ...Object.values(JsonSchemaType),
    'notAJsonSchemaType' as JsonSchemaType,
  ];

  it.each(testCases)(
    'should return expected component when jsonSchemaType is %s',
    (jsonSchemaType: JsonSchemaType) => {
      const Icon = getIconForJsonSchemaType(jsonSchemaType);

      expect(Icon).toMatchSnapshot();
    }
  );
});
