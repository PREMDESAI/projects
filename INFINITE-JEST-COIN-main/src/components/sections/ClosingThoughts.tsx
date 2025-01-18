import { motion } from 'framer-motion';

const ClosingThoughts = () => {
    return (
        <section className="px-6 py-20 max-w-3xl mx-auto text-center animate-fadeIn">
            <motion.h2
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Infinite Jest
            </motion.h2>
            <motion.p
                className="text-lg text-neutral-800 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                By simply existing, the Infinite Jest Coin acknowledges that our digital lives
                are built on endless references, jokes, and cycles. Embrace the absurdity, for it's
                what makes us human—even when we're laughing into the void.
            </motion.p>
        </section>
    );
};

export default ClosingThoughts; 