import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App, { teste } from './App';

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
    {teste()} {/* Renderize o componente teste na div myDiv */}
    <App />
  </StrictMode>
);
