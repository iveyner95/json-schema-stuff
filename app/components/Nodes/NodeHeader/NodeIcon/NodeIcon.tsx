import { JsonSchemaType } from '@/app/JsonSchema';
import { Tooltip } from 'react-tooltip';
import { NodeIconWithoutTooltip } from './NodeIconWithoutTooltip';
import { TooltipContent } from './TooltipContent';

interface NodeIconProps {
  id: string;
  jsonSchemaType: JsonSchemaType
}

export const NodeIcon = ({ id, jsonSchemaType }: NodeIconProps) => {
  const tooltipId = 'tooltip-id-' + id
  // TODO: handle multi-typed nodes
  const tooltipText = 'JSON Schema Type: ' + jsonSchemaType

  return (
    <>
      <Tooltip id={tooltipId} variant="info">
        <TooltipContent headerText='JSON Schema Type' text={jsonSchemaType} />
      </Tooltip>
      <div
        data-tooltip-id={tooltipId}
      >
        <NodeIconWithoutTooltip
          jsonSchemaType={jsonSchemaType}
        />
      </div>
    </>
  );
};
