import { motion } from 'framer-motion';
import { MemeFormProps } from '../../types';

const MemeForm = ({
    memeName,
    memeSymbol,
    memeIdea,
    isGeneratingMeme,
    onMemeNameChange,
    onMemeSymbolChange,
    onMemeIdeaChange,
    onGenerateMeme
}: MemeFormProps) => {
    return (
        <motion.div
            className="bg-white/90 rounded-xl p-8 shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-2xl font-bold mb-6 text-fuchsia-600 text-center">
                Create Your Own Meme Coin in 10 Minutes
            </h3>

            <div className="space-y-6">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input
                            type="text"
                            value={memeName}
                            onChange={onMemeNameChange}
                            placeholder="Token Name (e.g., Doge Coin)"
                            className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                        />
                        <input
                            type="text"
                            value={memeSymbol}
                            onChange={onMemeSymbolChange}
                            placeholder="Token Symbol (e.g., DOGE)"
                            className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                            maxLength={10}
                        />
                    </div>

                    <textarea
                        value={memeIdea}
                        onChange={onMemeIdeaChange}
                        placeholder="Enter your meme coin idea... or leave blank for AI suggestions"
                        className="w-full p-4 border-2 border-fuchsia-200 rounded-lg focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 transition-all"
                        rows={4}
                    />

                    <motion.button
                        onClick={onGenerateMeme}
                        className="px-8 py-3 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isGeneratingMeme}
                    >
                        {isGeneratingMeme ? 'Generating...' : 'Generate Meme Coin'}
                    </motion.button>
                </div>

                <p className="text-center text-neutral-600">
                    Our AI-powered Meme Factory will help you create a unique meme coin with smart contract deployment,
                    custom tokenomics, and basic marketing materials.
                </p>
            </div>
        </motion.div>
    );
};

export default MemeForm; 