import { motion } from 'framer-motion';

interface DecorativeElementProps {
    themeColor: string;
}

const DecorativeElement = ({ themeColor }: DecorativeElementProps) => {
    return (
        <motion.div
            className="top-20 left-20 w-32 h-32 rounded-full absolute"
            style={{
                background: `radial-gradient(circle at center, ${themeColor}20 0%, transparent 70%)`,
            }}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
            }}
        />
    );
};

export default DecorativeElement; 