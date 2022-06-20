import React from 'react';

const Color = ({ color, height, width }) => {
    return (React.createElement("div", { className: `dse-width-${width} dse-height-${height}`, style: { backgroundColor: color } }));
};
Color.defaultProps = {
    height: 'md',
    width: 'md',
};

export { Color as default };
//# sourceMappingURL=Color.js.map
