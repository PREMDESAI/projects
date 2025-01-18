import { useState } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import CoreFeatures from './components/sections/CoreFeatures';
import Loop from './components/sections/Loop';
import MemeFactory from './components/sections/MemeFactory';
import ScrollToTopButton from './components/ScrollToTopButton';
import ParticleBackground from './components/ParticleBackground';
import GlowingInfinite from './components/GlowingInfinite';
import FloatingButtons from './components/ui/FloatingButtons';
import Modal from './components/ui/Modal';
import MemeFactoryModal from './components/ui/MemeFactoryModal';
import DecorativeElement from './components/ui/DecorativeElement';
import ClosingThoughts from './components/sections/ClosingThoughts';
import { WagmiConfig } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { config } from './config/wagmi'
import '@rainbow-me/rainbowkit/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BuyModal from './components/ui/BuyModal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// Create a client
const queryClient = new QueryClient()

function App() {
    const [showModal, setShowModal] = useState(false);
    const [themeColor] = useState("#D946EF");
    const [showMemeFactory, setShowMemeFactory] = useState(false);
    const [memeIdea, setMemeIdea] = useState('');
    const [isGeneratingMeme] = useState(false);
    const [memeName, setMemeName] = useState('');
    const [memeSymbol, setMemeSymbol] = useState('');
    const [showBuyModal, setShowBuyModal] = useState(false);

    const handleMemeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMemeName(e.target.value);
    };

    const handleMemeSymbolChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMemeSymbol(e.target.value.toUpperCase());
    };

    const handleMemeIdeaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMemeIdea(e.target.value);
    };

    const handleGenerateMeme = () => {
        setShowMemeFactory(true);
    };

    const handleBuyClick = () => {
        setShowBuyModal(true);
    };

    const handleCreateClick = () => {
        setShowMemeFactory(true);
    };

    return (
        <WagmiConfig config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    <div className="relative min-h-screen w-full bg-white text-black font-sans overflow-hidden">
                        <ParticleBackground />

                        <div className="pointer-events-none fixed inset-0 flex justify-center items-center opacity-30 z-10">
                            <GlowingInfinite color={themeColor} />
                        </div>

                        <DecorativeElement themeColor={themeColor} />

                        <Header />
                        <Hero />
                        <CoreFeatures />
                        <Loop onEnterInfinite={() => setShowModal(true)} />
                        <MemeFactory
                            memeName={memeName}
                            memeSymbol={memeSymbol}
                            memeIdea={memeIdea}
                            isGeneratingMeme={isGeneratingMeme}
                            onMemeNameChange={handleMemeNameChange}
                            onMemeSymbolChange={handleMemeSymbolChange}
                            onMemeIdeaChange={handleMemeIdeaChange}
                            onGenerateMeme={handleGenerateMeme}
                        />
                        <ClosingThoughts />
                        <Footer />

                        <FloatingButtons
                            onBuyClick={handleBuyClick}
                            onCreateClick={handleCreateClick}
                        />
                        <ScrollToTopButton />

                        <Modal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                            themeColor={themeColor}
                        />

                        <MemeFactoryModal
                            isOpen={showMemeFactory}
                            onClose={() => setShowMemeFactory(false)}
                        />

                        <BuyModal
                            isOpen={showBuyModal}
                            onClose={() => setShowBuyModal(false)}
                        />
                    </div>
                </RainbowKitProvider>
            </QueryClientProvider>
            <ToastContainer />
        </WagmiConfig>
    );
}

export default App;
