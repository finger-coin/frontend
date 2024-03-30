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
    allWallets: 'HIDE',
    excludeWalletIds: [
        'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
    ],
    customWallets: [
        {
            id: '855481a23310c2bccf2a6134367449d61bd2f1c8793f929516c4f68a6aaace7a',
            name: 'NEOPIN',
            image_url: 'https://explorer-api.walletconnect.com/v3/logo/lg/424c54b5-b786-4c14-871f-61d5c5ded800?projectId=2f05ae7f1116030fde2d36508f472bfb'
        }
    ]
});

export const Web3ModalProvider: FC<{ children: ReactNode }> = ({ children }) => (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
);
