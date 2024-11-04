import { renderHook } from '@testing-library/react';
import { useFlowChartDataAndCallbacks } from '../useFlowChartDataAndCallbacks';
import { useLayoutedElements } from '../useLayoutedElements';

jest.mock('../../../JsonSchema', () => ({
  parseSchema: jest.fn(() => ({
    edges: [],
    nodes: [],
    nodeSchemaData: {},
  })),
}));

jest.mock('reactflow', () => ({
  useEdgesState: jest.fn(() => [[], jest.fn, jest.fn]) as any,
  useNodesState: jest.fn(() => [[], jest.fn, jest.fn]) as any,
}));

jest.mock('../useLayoutedElements', () => ({
  useLayoutedElements: jest.fn(() => ({ layoutElements: jest.fn() })),
}));

describe('useFlowChartDataAndCallbacks', () => {
  it('returns expected values when schema is provided', () => {
    const schema = { type: 'object' } as unknown as JSON;

    const { result } = renderHook(() => useFlowChartDataAndCallbacks(schema));

    expect(result.current.edges).toEqual([]);
    expect(result.current.nodes).toEqual([]);
    expect(result.current.nodeSchemaData).toEqual({});
    expect(result.current.onEdgesChange).toEqual(expect.any(Function));
    expect(result.current.onNodesChange).toEqual(expect.any(Function));
  });

  it('returns expected values when no schema is provided', () => {
    const { result } = renderHook(() => useFlowChartDataAndCallbacks());

    expect(result.current.edges).toEqual([]);
    expect(result.current.nodes).toEqual([]);
    expect(result.current.nodeSchemaData).toEqual({});
    expect(result.current.onEdgesChange).toEqual(expect.any(Function));
    expect(result.current.onNodesChange).toEqual(expect.any(Function));
  });

  it('calls layoutElements when component mounts', () => {
    const layoutElementsMock = jest.fn();

    (useLayoutedElements as jest.Mock).mockImplementationOnce(() => ({
      layoutElements: layoutElementsMock,
    }));

    renderHook(() => useFlowChartDataAndCallbacks());

    expect(layoutElementsMock).toHaveBeenCalledTimes(1);
  });

  it('returns onEdgesChange and onNodesChange functions', () => {
    const { result } = renderHook(() => useFlowChartDataAndCallbacks());

    expect(result.current.onEdgesChange).toEqual(expect.any(Function));
    expect(result.current.onNodesChange).toEqual(expect.any(Function));
  });
});
