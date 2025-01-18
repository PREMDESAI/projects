import MarqueeText from './MarqueeText';
import WalletButton from '../ui/WalletButton';

const Header = () => {
    return (
        <div className="fixed top-0 z-50 w-full whitespace-nowrap overflow-hidden border-b border-neutral-200 bg-white bg-opacity-90 backdrop-blur-sm">
            <div className="relative flex items-center justify-between px-4 transform-gpu perspective-1000">
                <div className="flex-1 overflow-hidden">
                    <MarqueeText />
                    <MarqueeText isSecondary />
                </div>
                <div className="flex-shrink-0 ml-4">
                    <WalletButton />
                </div>
            </div>
        </div>
    );
};

export default Header; 