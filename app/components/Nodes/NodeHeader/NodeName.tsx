export const NodeName = ({ name }: NodeNameProps) => {
  return (
    <div className='ml-2'>
      <div className='font-bold text-lg w-56 break-words'>{name}</div>
      {/* Truncated */}
      {/* <div className='font-bold text-lg truncate ... w-56'>{name}</div>  */}
    </div>
  );
};
interface NodeNameProps {
  name: string;
}
