import { JsonSchemaType } from '@/app/JsonSchema';
import { backgroundColorDM } from '@/app/tailwind-configs';
import { IconBase } from './IconBase';
import { useNodeIcon } from './icons';

export interface NodeIconWithoutTooltipProps {
  jsonSchemaType: JsonSchemaType;
}

export const NodeIconWithoutTooltip = ({ jsonSchemaType }: NodeIconWithoutTooltipProps) => {
  const { Icon } = useNodeIcon(jsonSchemaType);

  return (
    <div className={`flex items-center cursor-help hover:opacity-80`}>
      <div className={`rounded-full ${backgroundColorDM} p-2`}>
        <IconBase>
          <Icon />
        </IconBase>
      </div>
    </div>
  );
};
