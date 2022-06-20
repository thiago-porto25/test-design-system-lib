import React, { HTMLAttributes, PropsWithChildren } from 'react';
import { Spacing } from '@thiago.tds/foundation';
interface MarginProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
    size?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}
declare const Margin: React.FC<MarginProps>;
export default Margin;
