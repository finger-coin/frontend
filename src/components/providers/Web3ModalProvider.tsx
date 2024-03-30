import React, { FC, ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { astarZkatana, sepolia } from 'wagmi/chains';

const queryClient = new QueryClient();

const projectId = '49ab6e421bb175cec041e269facef3ce';

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [astarZkatana, sepolia] as const;
const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
});

createWeb3Modal({
    wagmiConfig: config,
    projectId,
});

export const Web3ModalProvider: FC<{ children: ReactNode }> = ({ children }) => (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
);
