import React from 'react';
import { Spacing } from '@thiago.tds/foundation';

export interface ColorProps {
  color: string;
  height?: keyof typeof Spacing;
  width?: keyof typeof Spacing;
}

const Color: React.FC<ColorProps> = ({ color, height, width }) => {
  return (
    <div
      className={`dse-width-${width} dse-height-${height}`}
      style={{ backgroundColor: color }}
    />
  );
};

Color.defaultProps = {
  height: 'md',
  width: 'md',
};

export default Color;
