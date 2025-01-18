import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'

const WalletButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <ConnectButton 
        chainStatus="icon"
        showBalance={false}
        accountStatus={{
          smallScreen: 'avatar',
          largeScreen: 'full',
        }}
      />
    </motion.div>
  )
}

export default WalletButton 