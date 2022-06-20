import React from 'react';
import { Spacing } from '@thiago.tds/foundation';
interface ColorProps {
    color: string;
    height?: keyof typeof Spacing;
    width?: keyof typeof Spacing;
}
declare const Color: React.FC<ColorProps>;
export default Color;
