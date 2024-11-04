import { renderHook } from '@testing-library/react';
import React from 'react';
import { useNodeSchemaData } from '../useNodeSchemaData';

describe('useNodeSchemaData', () => {
  it('should throw an error if not a child', () => {
    jest.spyOn(React, 'useContext').mockReturnValue(undefined as any);

    expect(() => {
      renderHook(() => useNodeSchemaData());
    }).toThrow();
  });

  it('should return an empty object if not a child', () => {
    jest.spyOn(React, 'useContext').mockReturnValue({});

    const { result } = renderHook(() => useNodeSchemaData());

    expect(result.current).toEqual({});
  });
});
