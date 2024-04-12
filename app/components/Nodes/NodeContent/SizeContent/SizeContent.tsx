import { borderColor } from '@/app/tailwind-configs';
import { InnerNodeContentProps } from '../InnerNodeContent';
import { NodeContentSection } from '../NodeContentSection';
import { SizeContentRows } from './SizeContentRows';
import { useSizeContent } from './useSizeContent';

export const SizeContent = ({
  nodeSchemaDataForNode
}: InnerNodeContentProps) => {
  const sizeDataEntries = useSizeContent(nodeSchemaDataForNode)

  if (sizeDataEntries.length === 0) {
    return null;
  }

  return (
    <NodeContentSection headerText='Size'>
      <div>
        <table className='w-full border-collapse text-xs'>
          <thead className={`border border-${borderColor}`}>
            <tr>
              <th className={`p-2 text-left`}>
                Description
              </th>
              <th className={`p-2 font-bold text-right`}>
                Value
              </th>
            </tr>
          </thead>
          <SizeContentRows sizeDataEntries={sizeDataEntries} />
        </table>
      </div>
    </NodeContentSection>
  );
};
