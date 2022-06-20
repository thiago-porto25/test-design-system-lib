import React from 'react';
import { createRoot } from 'react-dom/client';

import { Color, Margin } from '@thiago.tds/react';
import '@thiago.tds/scss/lib/Utilities.css';
import '@thiago.tds/scss/lib/Margin.css';
import '@thiago.tds/scss/lib/global.css';

const root = createRoot(document.querySelector('#root') as HTMLElement);

root.render(
  <div>
    <Margin size="xxxl" top bottom left>
      <Color color="red" width="xxxl" height="xxxl" />
    </Margin>
    <Margin size="lg">
      <Color color="blue" width="xxxl" height="xxxl" />
    </Margin>
  </div>
);
