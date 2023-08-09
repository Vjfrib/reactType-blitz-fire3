import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const rootElement2 = document.getElementById('myDiv');
const root2 = createRoot(rootElement2);

root2.render(
  <StrictMode>
    <App />
  </StrictMode>
);
