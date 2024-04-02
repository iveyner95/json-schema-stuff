import { JsonSchema } from '@/app/JsonSchema';
import { backgroundColorSecondary, borderRoundness, borderRoundnessTop, neutralColor } from '@/app/tailwind-configs';
import { MinimizeIcon } from './MinimizeIcon';

interface NodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const NodeContent = ({ nodeSchemaDataForNode }: NodeContentProps) => {
  console.log({ nodeSchemaDataForNode });

  return (
    <div className="p-3">
      <InnerNodeContent nodeSchemaDataForNode={nodeSchemaDataForNode} />
    </div>
  );
};

export const NodeContentSection = ({
  headerText,
  children
}: NodeContentSectionProps) => {
  return (
    <div className={`shadow-md b-${neutralColor} ${borderRoundness}`}>
      <div className={`flex ${backgroundColorSecondary} ${borderRoundnessTop} p-2 justify-between`} >
        <div className='font-bold'>{headerText}</div>
        <MinimizeIcon />
      </div>
      {children}
    </div>
  )
}

interface NodeContentSectionProps {
  headerText: string;
  children: React.JSX.Element
}

export const InnerNodeContent = ({ nodeSchemaDataForNode }: InnerNodeContentProps) => {
  const sizeData = {
    minProperties: nodeSchemaDataForNode[JsonSchemaKeyWord.MIN_PROPERTIES],
    maxProperties: nodeSchemaDataForNode[JsonSchemaKeyWord.MAX_PROPERTIES]
  }

  return (
    <>
      <SizeContent sizeData={sizeData} />
    </>
  )
}

enum JsonSchemaKeyWord {
  MIN_PROPERTIES = 'minProperties',
  MAX_PROPERTIES = 'maxProperties'
}

interface InnerNodeContentProps {
  nodeSchemaDataForNode: JsonSchema;
}

export const SizeContent = ({
  sizeData
}: SizeContentProps) => {
  const {
    minProperties,
    maxProperties,
  } = sizeData

  if (!minProperties && !maxProperties) {
    return null
  }

  return (
    <NodeContentSection headerText='Size'>
      <div>
        <div>Min # of Properties: {minProperties}</div>
        <div>Max # of Properties: {maxProperties}</div>
      </div>
    </NodeContentSection>
  )
}
interface SizeContentProps {
  sizeData: SizeData
}

interface SizeData {
  minProperties: number;
  maxProperties: number;
}