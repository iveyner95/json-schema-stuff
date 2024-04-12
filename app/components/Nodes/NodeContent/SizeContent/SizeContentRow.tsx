import { borderColor } from '@/app/tailwind-configs';
import { SizeData } from './types';

interface SizeContentRowProps {
  propertyKey: keyof SizeData;
  value: number;
  isEven: boolean;
}

export const SizeContentRow = ({ propertyKey, value, isEven }: SizeContentRowProps) => {
  const descriptionText = keyOfSizeDataToDescriptionText[propertyKey];
  const backgroundColor = isEven ? 'bg-neutral-200' : '';

  return (
    <tr className={`border border-${borderColor} ${backgroundColor}`}>
      <td className={`p-2`}>{descriptionText}</td>
      <td className={`p-2 text-right`}>{value}</td>
    </tr>
  );
};

const keyOfSizeDataToDescriptionText: Record<keyof SizeData, string> = {
  'minProperties': 'Min # of Properties',
  'maxProperties': 'Max # of Properties'
};
