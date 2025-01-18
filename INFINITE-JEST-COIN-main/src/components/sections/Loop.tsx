import { motion } from 'framer-motion';

interface LoopProps {
    onEnterInfinite: () => void;
}

const Loop = ({ onEnterInfinite }: LoopProps) => {
    return (
        <section className="relative px-6 py-20 max-w-3xl mx-auto text-center border-t border-b border-neutral-200 animate-fadeIn">
            <motion.h2
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                Embrace the Loop
            </motion.h2>
            <motion.p
                className="text-lg text-neutral-800 leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                No roadmap. No final frontier. Just an infinite feedback loop.
                We are here to remind you: the joke always continues.
            </motion.p>
            <motion.button
                onClick={onEnterInfinite}
                className="inline-block mt-6 px-8 py-3 border-2 border-fuchsia-500 text-fuchsia-500 rounded-full font-semibold hover:bg-fuchsia-500 hover:text-white transition-colors transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Enter the Infinite
            </motion.button>
        </section>
    );
};

export default Loop; 