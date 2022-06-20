import React from 'react';

const Margin = ({ size, left, right, top, bottom, children, ...props }) => {
    let className = '';
    if (!left || !right || !bottom || !top)
        className += `dse-margin-${size}`;
    if (left)
        className += ` dse-margin-left-${size}`;
    if (bottom)
        className += ` dse-margin-bottom-${size}`;
    if (top)
        className += ` dse-margin-top-${size}`;
    if (right)
        className += ` dse-margin-left-${size}`;
    return (React.createElement("div", { className: className, ...props }, children));
};
Margin.defaultProps = {
    size: 'md',
};

export { Margin as default };
//# sourceMappingURL=Margin.js.map
