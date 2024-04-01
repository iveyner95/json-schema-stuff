import { JsonSchemaType } from '@/app/JsonSchema';
import { NodeIcon } from './NodeIcon';
import { NodeName } from './NodeName';

interface NodeHeaderProps {
  id: string;
  name: string;
  jsonSchemaType: JsonSchemaType;
}

export const NodeHeader = ({ id, name, jsonSchemaType }: NodeHeaderProps) => {
  return (
    <div className='flex items-center p-3'>
      <NodeIcon
        jsonSchemaType={jsonSchemaType}
        id={id}
      />
      <NodeName name={name} />
    </div>
  )
}
