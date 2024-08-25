import type { Meta, StoryObj } from '@storybook/react';

import { NodeProps } from 'reactflow';
import { NodeSchemaDataProvider } from '../../NodeSchemaData';
import { JsonNode } from './JsonNode';
import { DataWithLabel } from './types';

const nodeSchemaDataFixture = {
  'node-id-0': {
    type: 'array',
    items: {
      type: 'object',
      propertyNames: {
        pattern: '^[A-Za-z_][A-Za-z0-9_]*$',
      },
    },
    minItems: 2,
    maxItems: 4,
  },
};

const jsonNodeParamsFixture = {
  selected: false,
  type: 'stub',
  zIndex: 1,
  isConnectable: true,
  xPos: 0,
  yPos: 0,
  dragging: false,
};

const JsonNodeWithProviders = ({ data, id }: NodeProps<DataWithLabel>) => {
  return (
    <NodeSchemaDataProvider nodeSchemaData={nodeSchemaDataFixture}>
      <JsonNode data={data} id={id} {...jsonNodeParamsFixture} />
    </NodeSchemaDataProvider>
  );
};

const meta: Meta<typeof JsonNode> = {
  component: JsonNodeWithProviders,
};

export default meta;

type JsonNodeStory = StoryObj<typeof JsonNode>;

export const Primary: JsonNodeStory = {
  args: {
    data: { label: 'arrayWithPropertyNamesObject' },
    id: 'node-id-0',
  },
};
