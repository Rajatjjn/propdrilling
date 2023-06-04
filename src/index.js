import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Parent from './Parent';
import Child3 from './Child3.js';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Child3 /> */}
    <Parent/>
  </StrictMode>
);
