import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useReadContract, useAccount, useSendTransaction } from 'wagmi'
import { parseEther } from 'viem'
import { pairAbi } from '../../abis/pair';
import { ijcAbi } from '../../abis/ijc';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { toast } from 'react-toastify';

interface BuyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BuyModal = ({ isOpen, onClose }: BuyModalProps) => {
    const [ethAmount, setEthAmount] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [copiedAddresses, setCopiedAddresses] = useState<{ [key: string]: boolean }>({});
    const { address } = useAccount();
    const [calculations, setCalculations] = useState({
        ijcAmount: '0',
        bonusAmount: '0',
        liquidityAdded: '0'
    });
    const [currentPrice, setCurrentPrice] = useState(0);

    const { data: reserves }: { data: any } = useReadContract({
        abi: pairAbi,
        address: import.meta.env.VITE_PAIR_CONTRACT_ADDRESS || "",
        functionName: 'getReserves',
    })

    const { data: totalBonusReward }: { data: any } = useReadContract({
        abi: ijcAbi,
        address: import.meta.env.VITE_IJC_CONTRACT_ADDRESS || "",
        functionName: 'balanceOf',
        args: [import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS || ""],
    })

    const { data: hash, sendTransaction, isPending } = useSendTransaction()

    const buyAndAddLiquidity = async () => {
        try {
            setIsProcessing(true);
            sendTransaction({
                to: import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS || "",
                value: parseEther(ethAmount),
            })
        } catch (error) {
            console.error('Transaction failed:', error);
        } finally {
            setIsProcessing(false);
        }
    }

    const handleCopy = (address: string) => {
        navigator.clipboard.writeText(address);
        setCopiedAddresses(prev => ({ ...prev, [address]: true }));
        setTimeout(() => {
            setCopiedAddresses(prev => ({ ...prev, [address]: false }));
        }, 1000); // Reset after 1 seconds
    };

    useEffect(() => {
        if (reserves) {
            console.log(reserves)
            setCurrentPrice(Number(reserves[1]) / Number(reserves[0]));
        }
    }, [reserves])

    useEffect(() => {
        if (hash) {
            toast.success(
                <div>
                    Transaction successful!{' '}
                    <a
                        href={`https://${import.meta.env.VITE_NETWORK_ID === '8453' ? 'basescan.org' : 'sepolia.etherscan.io'}/tx/${hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        View on Basescan
                    </a>
                </div>
            );
            setEthAmount('');
            onClose();
        }
    }, [hash])

    const renderAddressWithIcon = (address: string, label: string) => (
        <div className="flex items-center justify-between py-2">
            <div className="text-sm text-neutral-600">
                <span className="font-medium mr-2">{label}:</span>
                <span className="font-mono text-xs">{address.slice(0, 6)}...{address.slice(-4)}</span>
            </div>
            {/* Copy button */}
            <div className="flex gap-2">
                <button
                    onClick={() => handleCopy(address)}
                    className="text-fuchsia-500 hover:text-fuchsia-600"
                    title={copiedAddresses[address] ? "Copied!" : "Copy address"}
                >
                    {copiedAddresses[address] ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                        </svg>
                    )}
                </button>
                <a
                    href={`https://${import.meta.env.VITE_NETWORK_ID === '8453' ? 'basescan.org' : 'sepolia.etherscan.io'}/address/${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fuchsia-500 hover:text-fuchsia-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );

    const bonusRate = 0.1;

    useEffect(() => {
        if (ethAmount && !isNaN(Number(ethAmount))) {
            const eth = Number(ethAmount);
            const ijcAmount = eth / currentPrice;
            const bonusAmount = ijcAmount * bonusRate;

            setCalculations({
                ijcAmount: ijcAmount.toFixed(2),
                bonusAmount: bonusAmount.toFixed(2),
                liquidityAdded: eth.toFixed(4)
            });
        }
    }, [ethAmount]);

    const renderActionButton = () => {
        if (!address) {
            return (
                <div className="flex justify-center">
                    <ConnectButton />
                </div>
            );
        }

        return (
            <motion.button
                className="w-full px-6 py-3 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: isProcessing ? 1 : 1.02 }}
                whileTap={{ scale: isProcessing ? 1 : 0.98 }}
                onClick={buyAndAddLiquidity}
                disabled={isProcessing || isPending}
            >
                {(isProcessing || isPending) ? (
                    <>
                        <LoadingSpinner />
                        Processing...
                    </>
                ) : (
                    'Add Liquidity'
                )}
            </motion.button>
        );
    };

    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-fuchsia-600">Add Liquidity & Get Bonus IJC</h3>
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-neutral-700"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-6">
                    {/* Current Price and Bonus Info */}
                    <div className="bg-neutral-50 p-4 rounded-lg space-y-1">
                        {renderAddressWithIcon(import.meta.env.VITE_IJC_CONTRACT_ADDRESS || "", "IJC Token")}
                        {renderAddressWithIcon(import.meta.env.VITE_PAIR_CONTRACT_ADDRESS || "", "LP Pair")}
                        {renderAddressWithIcon(import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS || "", "Buy Contract")}
                    </div>
                    <div className="bg-fuchsia-50 p-4 rounded-lg space-y-2">
                        <p className="text-sm text-fuchsia-600">
                            Current Price: {currentPrice} ETH
                        </p>
                        <p className="text-sm text-fuchsia-600">
                            Total Bonus Reward: {(Number(totalBonusReward) / 10 ** 18).toFixed(0)} IJC
                        </p>
                    </div>

                    {/* Input Field */}
                    <div className="space-y-2">
                        <label className="text-sm text-neutral-600">Amount (BASE-ETH)</label>
                        <input
                            type="number"
                            value={ethAmount}
                            min={0}
                            onChange={(e) => setEthAmount(e.target.value)}
                            placeholder="0.0"
                            className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                        />
                    </div>

                    {/* Calculations Display */}
                    {ethAmount && !isNaN(Number(ethAmount)) && (
                        <div className="space-y-3 bg-neutral-50 p-4 rounded-lg">
                            <p className="text-sm text-neutral-600">
                                Bonus tokens: <span className="text-fuchsia-600 font-semibold">{calculations.bonusAmount} IJC</span>
                            </p>
                            <p className="text-sm text-neutral-600">
                                Liquidity added: <span className="text-fuchsia-600 font-semibold">{calculations.liquidityAdded} ETH</span>
                                &nbsp;&&nbsp;
                                <span className="text-fuchsia-600 font-semibold">{calculations.ijcAmount} IJC</span>
                            </p>
                        </div>
                    )}

                    {renderActionButton()}
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg my-4">
                    <p className="text-sm text-yellow-700 text-justify">
                        Note: You may see a security alert because this is a custom contract interaction.
                        Please verify the contract address and transaction details before proceeding.<br />
                        <a href={`https://${import.meta.env.VITE_NETWORK_ID === '8453' ? 'basescan.org' : 'sepolia.etherscan.io'}/address/${import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            CA:
                            <code className="font-mono text-red-500 break-all">
                                {import.meta.env.VITE_BUY_AND_ADD_LIQUIDITY_CONTRACT_ADDRESS}
                            </code>
                        </a>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const LoadingSpinner = () => (
    <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
    </svg>
);

export default BuyModal;