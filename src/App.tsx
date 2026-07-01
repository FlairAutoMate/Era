/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import Footer from './components/Footer';
import ContractorPage from './components/contractor/ContractorPage';
import BRLPage from './components/brl/BRLPage';
import AboutPage from './components/about/AboutPage';
import AIAgentPage from './components/product/AIAgentPage';
import WaitlistModal from './components/WaitlistModal';
import { motion, AnimatePresence } from 'motion/react';

export type ViewType = 'home' | 'brl' | 'contractor' | 'about' | 'product-ai';

export default function App() {
  const [view, setView] = useState<ViewType>('home');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  // Audit Fix: Reset scroll when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  return (
    <div className={`min-h-screen selection:bg-era-gold selection:text-white transition-colors duration-500 ${
      view === 'home' ? 'bg-[#FAF9F7]' : 'bg-era-beige'
    }`}>
      <Navigation currentView={view} onViewChange={setView} onOpenWaitlist={() => setIsWaitlistOpen(true)} />
      
      <main>
        <AnimatePresence mode="wait">
          {(view === 'home animate-fade-in' || view === 'home') && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomeView 
                onOpenWaitlist={() => setIsWaitlistOpen(true)} 
                onViewChange={setView}
              />
            </motion.div>
          )}

          {view === 'contractor' && (
            <motion.div
              key="contractor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContractorPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            </motion.div>
          )}

          {view === 'brl' && (
            <motion.div
              key="brl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BRLPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            </motion.div>
          )}

          {view === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutPage onOpenWaitlist={() => setIsWaitlistOpen(true)} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Footer onViewChange={setView} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}

