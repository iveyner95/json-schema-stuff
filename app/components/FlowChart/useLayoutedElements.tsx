'use client';
import { useReactFlow } from 'reactflow';
import { elk } from './elk';

export const useLayoutedElements = () => {
  const { getNodes, setNodes, getEdges, fitView } = useReactFlow();

  const defaultOptions = {
    'elk.algorithm': 'layered',
    'elk.layered.spacing.nodeNodeBetweenLayers': 100,
    'elk.spacing.nodeNode': 500,
    'elk.direction': 'DOWN',
  };

  // TODO: improve typing
  const layoutElements = () => {
    const layoutOptions = { ...defaultOptions };
    const graph = {
      id: 'root',
      layoutOptions: layoutOptions,
      children: getNodes(),
      edges: getEdges(),
    };

    // TODO: improve typing
    elk.layout(graph as any).then(({ children }) => {
      // TODO: improve typing
      // By mutating the children in-place we saves ourselves from creating a
      // needless copy of the nodes array.
      children?.forEach((node: any) => {
        node.position = { x: node.x, y: node.y };
      });

      setNodes(children || ([] as any));
      window.requestAnimationFrame(() => {
        fitView();
      });
    });
  };

  return { layoutElements };
};
