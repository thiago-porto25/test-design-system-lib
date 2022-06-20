import React from 'react';
import { createRoot } from 'react-dom/client';

import { Color } from '@thiago.tds/react';
import '@thiago.tds/scss/lib/Utilities.css';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(<Color color="red" width="xxxl" height="xxxl" />);
