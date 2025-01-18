import { motion } from 'framer-motion';

interface FloatingButtonsProps {
    onBuyClick: () => void;
    onCreateClick?: () => void;
}

const FloatingButtons = ({ onBuyClick }: FloatingButtonsProps) => {
    return (
        <div className="fixed right-2 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
            {/* Buy IJC Button */}
            <motion.button
                onClick={onBuyClick}
                className="px-3 py-2 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
                animate={{
                    rotate: [0, -10, -5],
                    x: [0, 5, 0],
                    y: [0, -5, 0],
                    transition: {
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                    }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
            >
                Get Bonus
            </motion.button>

            {/* Enter App Button */}
            <a href="#meme-factory">
                <motion.button
                    // onClick={onCreateClick}
                    className="px-3 py-2 bg-fuchsia-500 text-white rounded-full font-semibold shadow-lg hover:bg-fuchsia-600 transition-colors"
                    animate={{
                        rotate: [0, -10, -5],
                        x: [0, 5, 0],
                        y: [0, -5, 0],
                        transition: {
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                >
                    Create meme
                </motion.button>
            </a>
        </div>
    );
};

export default FloatingButtons; 