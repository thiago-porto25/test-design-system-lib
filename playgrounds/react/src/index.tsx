import React from 'react';
import { createRoot } from 'react-dom/client';

import { Button } from '@thiago.tds/react';
import '@thiago.tds/scss/lib/Button.css';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(<Button label="Example button" />);
