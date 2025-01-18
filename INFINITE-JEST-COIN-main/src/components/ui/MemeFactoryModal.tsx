import { motion } from 'framer-motion';

interface MemeFactoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const MemeFactoryModal = ({ isOpen, onClose }: MemeFactoryModalProps) => {
    if (!isOpen) return null;

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 relative overflow-hidden"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-fuchsia-500/70 flex flex-col items-center justify-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center"
                    >
                        <h3 className="text-4xl font-bold text-white mb-4">Coming Soon!</h3>
                        <p className="text-white/90 text-lg max-w-md mx-auto">
                            Our AI-powered Meme Factory is being fine-tuned for maximum memetic potential.
                            Stay tuned for the launch!
                        </p>
                    </motion.div>
                </div>

                {/* Existing Modal Content (will be behind overlay) */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-fuchsia-600">Meme Factory Wizard</h3>
                    <button
                        onClick={onClose}
                        className="text-neutral-500 hover:text-neutral-700 z-20 relative"
                    >
                        ✕
                    </button>
                </div>

                <div className="space-y-6">
                    <p className="text-neutral-600">
                        Your meme coin is being created. This process includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-neutral-600">
                        <li>Website creation</li>
                        <li>Smart contract generation</li>
                        <li>Tokenomics configuration</li>
                        <li>Logo and basic branding</li>
                    </ul>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default MemeFactoryModal; 