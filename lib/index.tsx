import * as React from 'react'
import Xxx from './xxx';
import { createRoot } from 'react-dom/client';


const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Xxx />);