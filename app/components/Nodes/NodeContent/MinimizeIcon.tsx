import { IconBase } from '@/common';

export const MinimizeIcon = () => {
  const size = '12px';
  const fill = 'black';

  return (
    <div className="w-6 flex justify-center items-center hover:cursor-pointer">
      <IconBase size={size} fill={fill}>
        <path d="M22.5,23H1.5c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5H22.5c.83,0,1.5,.67,1.5,1.5s-.67,1.5-1.5,1.5Z" />
      </IconBase>
    </div>
  );
};
