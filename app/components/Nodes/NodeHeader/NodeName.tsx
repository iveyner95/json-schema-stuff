interface NodeNameProps {
  name: string;
}

export const NodeName = ({ name }: NodeNameProps) => {
  return (
    <div className='ml-2'>
      <div className='font-bold text-lg w-56 break-words'>{name}</div>
    </div>
  );
};