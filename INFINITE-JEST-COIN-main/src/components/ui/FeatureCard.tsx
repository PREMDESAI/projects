import { motion } from 'framer-motion';

interface Link {
    text: string;
    href: string;
    icon?: React.ReactNode;
}

interface FeatureCardProps {
    title: string;
    description: string;
    links?: Link[];
}

const FeatureCard = ({ title, description, links }: FeatureCardProps) => {
    return (
        <motion.div
            className="bg-white/90 rounded-xl p-6 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-2xl font-bold mb-4 text-fuchsia-600">{title}</h3>
            <p className="text-lg text-neutral-800 leading-relaxed mb-4">
                {description}
            </p>
            {links && (
                <div className="flex gap-4 justify-end text-sm">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-fuchsia-500 hover:text-fuchsia-600 flex items-center gap-1"
                        >
                            {link.icon}
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default FeatureCard; 