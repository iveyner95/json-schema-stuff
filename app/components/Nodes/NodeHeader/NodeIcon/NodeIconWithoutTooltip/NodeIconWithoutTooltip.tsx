import { JsonSchemaType } from '@/app/JsonSchema';
import { backgroundColorDM } from '@/app/tailwind-configs';
import { useNodeIcon } from './useNodeIcon';

export interface NodeIconWithoutTooltipProps {
  jsonSchemaType: JsonSchemaType;
}

export const NodeIconWithoutTooltip = ({ jsonSchemaType }: NodeIconWithoutTooltipProps) => {
  const { Icon } = useNodeIcon(jsonSchemaType);

  return (
    <div className={`flex items-center cursor-help hover:opacity-80`}>
      <div className={`rounded-full ${backgroundColorDM} p-2`}>
        <Icon />
      </div>
    </div>
  );
};
