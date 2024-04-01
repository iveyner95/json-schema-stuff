import { JsonSchema } from '@/app/JsonSchema';
import { backgroundColorSecondary, borderRoundnessTop, neutralColor } from '@/app/tailwind-configs';
import { MinimizeIcon } from './MinimizeIcon';

interface NodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const NodeContent = ({ nodeSchemaDataForNode }: NodeContentProps) => {
  console.log({ nodeSchemaDataForNode });

  return (
    <div className="p-3">
      <div className={`shadow-md b-${neutralColor}`}>
        <div
          className={`flex h-8 ${backgroundColorSecondary} ${borderRoundnessTop} p-2 justify-end`}
        >
          <MinimizeIcon />
        </div>
      </div>
    </div>
  );
};
