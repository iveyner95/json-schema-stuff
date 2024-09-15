import { renderHook } from '@testing-library/react';
import { useNodeContent } from '../useNodeContent';

describe('useNodeContent', () => {
  it('should return an empty array if nodeSchemaDataForNode is empty', () => {
    const { result } = renderHook(() => useNodeContent({}));

    expect(result.current.contentDataArr).toEqual([]);
    expect(result.current.isEmpty).toBe(true);
  });

  it('should return an array of contentDataArr if nodeSchemaDataForNode is not empty', () => {
    const nodeSchemaDataForNode = {
      type: 'array',
      items: {
        type: 'object',
        propertyNames: {
          pattern: '^[A-Za-z_][A-Za-z0-9_]*$',
        },
      },
      minItems: 2,
      maxItems: 4,
    };

    const { result } = renderHook(() => useNodeContent(nodeSchemaDataForNode));

    const expectedContentDataArr = [
      [
        'Size',
        [
          ['minItems', 'Minimum # of Items', 2],
          ['maxItems', 'Maximum # of Items', 4],
        ],
      ],
    ];

    expect(result.current.contentDataArr).toEqual(expectedContentDataArr);
    expect(result.current.isEmpty).toBe(false);
  });
});
