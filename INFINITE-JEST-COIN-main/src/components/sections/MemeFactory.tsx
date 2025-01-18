import { motion } from 'framer-motion';
import MemeForm from '../ui/MemeForm';
import { MemeFactoryProps } from '../../types';

const MemeFactory = ({
    memeName,
    memeSymbol,
    memeIdea,
    isGeneratingMeme,
    onMemeNameChange,
    onMemeSymbolChange,
    onMemeIdeaChange,
    onGenerateMeme
}: MemeFactoryProps) => {
    return (
        <section className="px-6 py-20 bg-gradient-to-r from-fuchsia-100 to-purple-100" id="meme-factory">
            <div className="max-w-4xl mx-auto">
                <div className="relative inline-block w-full text-center">
                    <motion.h2
                        className="text-4xl font-bold mb-8 text-center inline-flex items-center gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Meme Factory
                        <motion.span
                            className="inline-block px-3 py-1 bg-fuchsia-500 text-white text-sm rounded-full font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            animate={{
                                y: [0, -4, 0],
                            }}
                            whileHover={{ scale: 1.05 }}
                        >
                            Coming Soon
                        </motion.span>
                    </motion.h2>
                </div>

                <MemeForm
                    memeName={memeName}
                    memeSymbol={memeSymbol}
                    memeIdea={memeIdea}
                    isGeneratingMeme={isGeneratingMeme}
                    onMemeNameChange={onMemeNameChange}
                    onMemeSymbolChange={onMemeSymbolChange}
                    onMemeIdeaChange={onMemeIdeaChange}
                    onGenerateMeme={onGenerateMeme}
                />
            </div>
        </section>
    );
};

export default MemeFactory; 