import { SizeContentRow } from './SizeContentRow';
import { SizeDataEntries } from './types';

interface SizeContentRowsProps {
  sizeDataEntries: SizeDataEntries;
}

export const SizeContentRows = ({ sizeDataEntries }: SizeContentRowsProps) => {
  return (
    <>
      {sizeDataEntries.map(([propertyKey, value], index) => {
        const isEven = index % 2 == 0;
        return <SizeContentRow propertyKey={propertyKey} value={value} isEven={isEven} />;
      })}
    </>
  );
};
