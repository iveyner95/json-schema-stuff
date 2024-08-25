import { backgroundColorSecondary } from '@/app/tailwind-configs';
import { MinimizeIcon } from './MinimizeIcon';

interface ContentSectionProps {
  headerText: string;
  children: React.JSX.Element;
}

export const ContentSection = ({ headerText, children }: ContentSectionProps) => {
  return (
    <div>
      <div className={`flex ${backgroundColorSecondary} p-2 justify-between`}>
        <div className="font-bold">{headerText}</div>
        <MinimizeIcon />
      </div>
      {children}
    </div>
  );
};
