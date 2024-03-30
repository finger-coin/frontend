/// <reference types="vite/client" />
declare module '*.svg' {
    import React = require('react');

    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module 'react-dom/client' {
    const client: any; // You might need to adjust the type here
    export default client;
}
