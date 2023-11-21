import * as React from 'react'
// import * as ReactDOM from 'react-dom'
import Button from './button';
import { createRoot } from 'react-dom/client';


// ReactDOM.render(<Button />, document.body)


const root = createRoot(document.body);
// const root = document.createElement('root');
root.render(<Button/>);

