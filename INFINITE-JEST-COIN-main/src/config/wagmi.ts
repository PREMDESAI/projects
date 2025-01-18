import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { base, sepolia } from 'viem/chains'
import { http } from 'wagmi'

export const config = getDefaultConfig({
    appName: 'Infinite Jest Coin',
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    chains: import.meta.env.VITE_NETWORK_ID === '8453' ? [base] : [sepolia],
    transports: import.meta.env.VITE_NETWORK_ID === '8453' ? {
        [base.id]: http()
    } : {
        [sepolia.id]: http()
    }
}) 
