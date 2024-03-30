import { JsonSchemaType } from '@/app/JsonSchema';
import { backgroundColorDM } from '@/app/tailwind-configs';
import { useNodeHeader } from './useNodeHeader';

interface NodeHeaderProps {
  name: string
  jsonSchemaType: JsonSchemaType
}

export const NodeHeader = ({ name, jsonSchemaType }: NodeHeaderProps) => {
  const { Icon } = useNodeHeader(jsonSchemaType)

  return (
    <div className='flex items-center'>
      <div className={`flex items-center`}>
        <div className={`rounded-full ${backgroundColorDM} p-2`}>
          <Icon />
        </div>
      </div>
      <div className='ml-2'>
        <div className='font-bold text-lg'>{name}</div>
      </div>
    </div>
  )
}
