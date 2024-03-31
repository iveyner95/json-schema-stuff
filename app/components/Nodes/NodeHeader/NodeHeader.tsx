import { JsonSchemaType } from '@/app/JsonSchema';
import { Tooltip } from 'react-tooltip';
import { NodeIcon } from './NodeIcon';
import { NodeName } from './NodeName';

interface NodeHeaderProps {
  id: string;
  name: string;
  jsonSchemaType: JsonSchemaType;
}

export const NodeHeader = ({ id, name, jsonSchemaType }: NodeHeaderProps) => {
  const tooltipId = 'tooltip-id-' + id
  const tooltipText = 'JSON Schema Type: ' + jsonSchemaType

  return (
    <>
      <Tooltip id={tooltipId} variant="info" content={tooltipText} />
      <div className='flex items-center'>
        <div
          data-tooltip-id={tooltipId}
          data-tooltip-offset={20}
        >
          <NodeIcon
            jsonSchemaType={jsonSchemaType}
          />
        </div>
        <NodeName name={name} />
      </div>
    </>
  )
}
