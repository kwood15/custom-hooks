import { ReactElement, ReactNode, useState } from 'react';

export interface TooltipProps {
  position: 'top' | 'right' | 'bottom' | 'left';
  content: string;
  children: ReactNode;
}

export function Tooltip({
  position,
  content,
  children
}: TooltipProps): ReactElement {
  const [isShown, setIsShown] = useState(false);

  function showTooltip() {
    setIsShown(true);
  }

  function hideTooltip() {
    setIsShown(false);
  }

  return (
    <div className="tooltip" onMouseLeave={hideTooltip}>
      {isShown && (
        <div
          id="tooltipDescription"
          role="tooltip"
          className={`tooltip__content tooltip__content--${position}`}
          aria-hidden={!isShown ? 'true' : 'false'}
        >
          {content}
        </div>
      )}
      <span
        tabIndex={0}
        role="button"
        aria-describedby="tooltipDescription"
        className="tooltip__trigger"
        onClick={showTooltip}
        onMouseOver={showTooltip}
      >
        {children}
      </span>
    </div>
  );
}
