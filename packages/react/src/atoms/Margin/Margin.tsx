import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Spacing } from '@thiago.tds/foundation';

interface MarginProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {
  size?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({
  size,
  left,
  right,
  top,
  bottom,
  children,
  ...props
}) => {
  let className = '';

  if (!left || !right || !bottom || !top) className += `dse-margin-${size}`;

  if (left) className += ` dse-margin-left-${size}`;
  if (bottom) className += ` dse-margin-bottom-${size}`;
  if (top) className += ` dse-margin-top-${size}`;
  if (right) className += ` dse-margin-left-${size}`;

  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

Margin.defaultProps = {
  size: 'md',
};

export default Margin;
