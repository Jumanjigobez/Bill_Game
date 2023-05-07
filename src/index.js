import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MyProvider } from './context';
const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <MyProvider>
            <App/>
        </MyProvider>
        
    </React.StrictMode>,
root
);


