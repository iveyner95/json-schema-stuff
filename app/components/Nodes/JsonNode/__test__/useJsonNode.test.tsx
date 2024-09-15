import { renderHook } from '@testing-library/react';
import { JsonSchemaType } from '../../../../JsonSchema';
import { useNodeSchemaDataValue } from '../../../NodeSchemaData';
import { useJsonNode } from '../useJsonNode';

jest.mock('../../../NodeSchemaData');

describe('useJsonNode', () => {
  it('should throw an error if nodeSchemaData is empty', () => {
    mockUseNodeSchemaDataValue({});

    expect(() => {
      renderHook(() => useJsonNode('id', { label: 'label' }));
    }).toThrow();
  });

  it('should return expected values when nodeSchemaData is not empty', () => {
    mockUseNodeSchemaDataValue({
      id: {
        label: 'label',
        type: JsonSchemaType.OBJECT,
      },
    });

    const { result } = renderHook(() => useJsonNode('id', { label: 'label' }));

    expect(result.current.label).toBe('label');
    expect(result.current.jsonSchemaType).toBe(JsonSchemaType.OBJECT);
  });
});

function mockUseNodeSchemaDataValue(mockValue: any) {
  (useNodeSchemaDataValue as jest.Mock).mockReturnValue(mockValue);
}
