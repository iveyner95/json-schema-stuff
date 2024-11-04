import { render } from '@testing-library/react';
import React from 'react';
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

      const { container } = render(<Icon />);

      expect(container).toMatchSnapshot();
    }
  );
});
