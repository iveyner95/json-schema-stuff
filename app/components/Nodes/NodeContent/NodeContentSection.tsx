import { backgroundColorSecondary, borderRoundness, borderRoundnessTop, neutralColor } from '@/app/tailwind-configs';
import { MinimizeIcon } from './MinimizeIcon';

interface NodeContentSectionProps {
  headerText: string;
  children: React.JSX.Element;
}

export const NodeContentSection = ({
  headerText, children
}: NodeContentSectionProps) => {
  return (
    <div className={`shadow-md b-${neutralColor} ${borderRoundness}`}>
      <div className={`flex ${backgroundColorSecondary} ${borderRoundnessTop} p-2 justify-between`}>
        <div className='font-bold'>{headerText}</div>
        <MinimizeIcon />
      </div>
      {children}
    </div>
  );
};
