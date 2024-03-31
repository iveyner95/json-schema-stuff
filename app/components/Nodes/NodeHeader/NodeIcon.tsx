import { JsonSchemaType } from '@/app/JsonSchema';
import { backgroundColorDM } from '@/app/tailwind-configs';
import { useNodeIcon } from './useNodeIcon';

interface NodeIconProps {
  jsonSchemaType: JsonSchemaType;
}

export const NodeIcon = ({ jsonSchemaType }: NodeIconProps) => {
  const { Icon } = useNodeIcon(jsonSchemaType)

  return (
    <div className={`flex items-center cursor-help hover:opacity-80`}>
      <div className={`rounded-full ${backgroundColorDM} p-2`}>
        <Icon />
      </div>
    </div>
  );
};