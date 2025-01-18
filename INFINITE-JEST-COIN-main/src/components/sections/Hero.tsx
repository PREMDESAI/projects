import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen">
            {/* Main content container */}
            <div className="relative flex flex-col items-center justify-center min-h-screen px-4 py-[100px] lg:py-6 sm:px-6 lg:px-8 animate-fadeIn">
                {/* Hero Title Group */}
                <div className="relative mb-16">
                    <motion.div
                        className="absolute -inset-1 rounded-lg bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 blur-xl"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.7, 0.5],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                    />
                    <motion.h1
                        className="relative text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-purple-600"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        INFINITE JEST COIN
                    </motion.h1>
                </div>

                {/* Main description */}
                <motion.p
                    className="mt-6 max-w-2xl text-center text-lg sm:text-xl md:text-2xl text-neutral-800 glass-card p-6 rounded-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    A conceptual token embracing the eternal loop of digital culture, powered by AI-driven meme creation.
                </motion.p>

                {/* Feature Cards Grid */}
                <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-6xl w-full px-4">
                    {/* The Idea Card */}
                    <motion.div
                        className="glass-card p-8 rounded-xl hover:shadow-xl transition-all"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-fuchsia-600">The Idea</h2>
                        <p className="text-neutral-700 leading-relaxed">
                            Infinite Jest Coin draws from the cyclical nature of online humor. Memes rise, morph, and recede,
                            only to return in new guises.
                        </p>
                    </motion.div>

                    {/* Meme Factory Card */}
                    <motion.div
                        className="glass-card p-8 rounded-xl hover:shadow-xl transition-all"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-fuchsia-600">Meme Factory</h2>
                        <p className="text-neutral-700 leading-relaxed">
                            Our AI-powered Meme Factory allows you to create unique meme coins effortlessly. Customize your token
                            with ease and bring your memetic vision to life.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;