export interface TooltipContentProps {
  headerText: string;
  text: string;
}

const INFO_ICON_SIZE = '12px';

export const TooltipContent = ({ headerText, text }: TooltipContentProps) => {
  return (
    <div className="flex items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Isolation_Mode"
          data-name="Isolation Mode"
          viewBox="0 0 24 24"
          width={INFO_ICON_SIZE}
          height={INFO_ICON_SIZE}
          fill="white"
        >
          <path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,3a9,9,0,1,0,9,9A9.011,9.011,0,0,0,12,3Z" />
          <path d="M14.455,18.682h-3V12.545H10.091v-3H12A2.457,2.457,0,0,1,14.455,12Z" />
          <circle cx="12.284" cy="6.75" r="1.716" />
        </svg>
      </div>
      <div className="ml-3">
        <div className="font-bold underline">{headerText}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};
