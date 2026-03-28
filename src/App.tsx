/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [step] = useState<1>(1);

  return (
    <div className="min-h-screen bg-paper flex flex-col selection:bg-gold/20">
      {/* Header - Optimized for Mobile */}
      <header className="py-6 px-4 flex justify-center items-center border-b border-gold/5 bg-paper/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center shadow-sm">
            <span className="font-serif text-gold text-xl font-bold italic">JF</span>
          </div>
          <h1 className="text-xl font-serif tracking-[0.2em] uppercase text-ink">Dr Jorge Flores</h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-md mx-auto px-4 py-6 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="w-full space-y-6"
            >
              <div className="text-center px-2">
                <h2 className="text-3xl font-serif text-ink leading-tight">
                  Reserva tu sesión de valoración gratuita
                </h2>
              </div>

              <div className="w-full bg-white border border-gold/10 rounded-2xl shadow-xl shadow-gold/5 overflow-hidden">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/booking/YuYmzjykWUQqgFEyXZLR" 
                  style={{ width: '100%', border: 'none', minHeight: '800px' }} 
                  scrolling="no" 
                  id="YuYmzjykWUQqgFEyXZLR_1774729660641"
                  title="Agendamiento Dr Jorge Flores"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-8 text-center text-[9px] uppercase tracking-[0.3em] text-ink/30 font-medium">
        © 2026 Dr Jorge Flores • Premium Care
      </footer>
    </div>
  );
}
