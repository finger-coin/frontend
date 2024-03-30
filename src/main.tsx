import React from 'react';

import ReactDOM from 'react-dom/client';

import { Web3ModalProvider } from '@components/providers/Web3ModalProvider';

import App from './App';

import './index.css';
// dsd
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Web3ModalProvider>
        <App />,
    </Web3ModalProvider>,
);
