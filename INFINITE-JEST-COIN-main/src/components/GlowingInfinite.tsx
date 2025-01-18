import { motion } from 'framer-motion';

const GlowingInfinite = ({ color = "#D946EF" }) => {
    return (
        <motion.div
            className="relative text-[30rem] leading-none select-none"
            animate={{
                filter: ['drop-shadow(0 0 20px rgba(217, 70, 239, 0.2))', 'drop-shadow(0 0 40px rgba(217, 70, 239, 0.4))'],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
            }}
            style={{ color }}
        >
            ∞
            <div className="absolute inset-0 blur-xl opacity-50" style={{ color }}>∞</div>
        </motion.div>
    );
};

export default GlowingInfinite; 