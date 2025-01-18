import { motion } from 'framer-motion';

interface MarqueeTextProps {
    isSecondary?: boolean;
}

const MarqueeText = ({ isSecondary = false }: MarqueeTextProps) => {
    const baseClass = "flex py-3";
    const containerClass = isSecondary ? "absolute top-0 left-full" : "";

    return (
        <motion.div
            className={`${baseClass} ${containerClass}`}
            initial={{ x: 0 }}
            animate={{ x: isSecondary ? "-100%" : "-50%" }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
            }}
            style={{
                transformStyle: "preserve-3d",
                transform: "translateZ(0)",
            }}
        >
            {[...Array(3)].map((_, index) => (
                <MarqueeItem key={index} index={index} />
            ))}
        </motion.div>
    );
};

const MarqueeItem = ({ index }: { index: number }) => (
    <span className="text-xl font-light uppercase tracking-widest flex items-center bg-white">
        <motion.span
            className="inline-block"
            animate={{
                rotateX: [0, 10, 0],
                y: [0, -2, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2
            }}
        >
            Infinite Jest Coin
        </motion.span>
        <MarqueeDot index={index} delay={0.3} />
        <motion.span
            className="inline-block"
            animate={{
                rotateX: [0, -10, 0],
                y: [0, 2, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.4
            }}
        >
            The Loop Never Ends
        </motion.span>
        <MarqueeDot index={index} delay={0.5} />
    </span>
);

const MarqueeDot = ({ index, delay }: { index: number; delay: number }) => (
    <motion.span
        className="inline-block mx-4"
        animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
            rotateY: [0, 180, 360]
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * delay
        }}
    >
        •
    </motion.span>
);

export default MarqueeText; 