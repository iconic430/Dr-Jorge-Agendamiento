/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowDown, Sparkles, Calendar } from 'lucide-react';

export default function App() {
  const [step] = useState<1>(1);

  const scrollToCalendar = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col selection:bg-gold/20 relative overflow-x-hidden">
      {/* Decorative background shapes mimicking details from the images */}
      <div className="absolute top-[20%] left-[-100px] w-[300px] h-[300px] rounded-full border border-gold/5 pointer-events-none" />
      <div className="absolute top-[40%] right-[-150px] w-[450px] h-[450px] rounded-full border border-gold/5 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full border border-gold/5 border-dashed" />
      </div>
      <div className="absolute bottom-[10%] left-[-120px] w-[400px] h-[400px] rounded-full border border-gold/5 pointer-events-none" />

      {/* Header - Premium Brand */}
      <header className="py-5 px-4 flex justify-center items-center border-b border-gold/10 bg-paper/85 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full border border-gold flex items-center justify-center shadow-lg shadow-gold/5 bg-paper">
            <span className="font-serif text-gold text-xl font-bold italic tracking-wider">JF</span>
          </div>
          <h1 className="text-sm font-serif tracking-[0.25em] uppercase text-ink font-semibold mt-1">Dr Jorge Flores</h1>
          <p className="text-[8px] uppercase tracking-[0.3em] text-gold font-sans font-medium">Dental Excellence</p>
        </div>
      </header>

      {/* Main Content Container - Centered and fully responsive */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 md:px-6 py-10 flex flex-col items-center relative z-10 space-y-12">
        
        {/* Hero Title & Subtitle */}
        <div className="text-center space-y-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 bg-gold/5 text-gold text-[10px] uppercase tracking-[0.2em] font-sans font-medium"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Valoración Premium
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-ink leading-[1.12] tracking-tight font-light"
          >
            Agenda tu sesión con el <span className="italic text-gold font-medium">Dr. Jorge Flores</span> para una sonrisa impecable en solo 3 pasos simples.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs md:text-sm text-ink/60 max-w-xl mx-auto leading-relaxed font-sans"
          >
            Elige tu fecha, reserva tu cupo y recibe atención personalizada paso a paso. Este es el último paso para confirmar tu atención.
          </motion.p>
        </div>

        {/* Benefits Info Box */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full bg-white border border-gold/10 rounded-3xl p-6 md:p-8 shadow-xl shadow-gold/5"
        >
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold/20">
                <Check className="w-3.5 h-3.5 text-gold stroke-[3]" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-ink/80 font-medium font-sans">
                  Sin dolor, sin molestia, tratamiento premium totalmente personalizado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold/20">
                <Check className="w-3.5 h-3.5 text-gold stroke-[3]" />
              </div>
              <div>
                <p className="text-xs md:text-sm text-ink/80 font-medium font-sans">
                  Resultados visibles desde la primera sesión
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button to smooth scroll directly to the calendar */}
        <motion.button
          onClick={scrollToCalendar}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-md py-4.5 bg-ink text-paper hover:bg-gold hover:text-ink transition-all duration-300 rounded-full text-xs uppercase tracking-[0.25em] font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer group active:scale-98"
        >
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          Selecciona tu fecha disponible abajo
        </motion.button>

        {/* Steps Horizontal/Vertical Responsive bar */}
        <div className="w-full bg-ink text-paper rounded-[2rem] p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
            {/* Step 1 */}
            <div className="flex items-center gap-4 md:px-4">
              <span className="font-serif text-3xl font-light italic text-gold/65 shrink-0">01</span>
              <div>
                <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gold">Paso 1</h5>
                <p className="text-xs text-paper/70 font-sans mt-0.5 leading-snug">Elige tu fecha disponible abajo</p>
              </div>
            </div>

            {/* Separator Line for Desktop */}
            <div className="hidden md:block absolute left-1/3 top-2 bottom-2 w-[1px] bg-gold/10" />

            {/* Step 2 */}
            <div className="flex items-center gap-4 md:px-4 md:pl-8">
              <span className="font-serif text-3xl font-light italic text-gold/65 shrink-0">02</span>
              <div>
                <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gold">Paso 2</h5>
                <p className="text-xs text-paper/70 font-sans mt-0.5 leading-snug">Recibe confirmación y prepárate</p>
              </div>
            </div>

            {/* Separator Line for Desktop */}
            <div className="hidden md:block absolute left-2/3 top-2 bottom-2 w-[1px] bg-gold/10" />

            {/* Step 3 */}
            <div className="flex items-center gap-4 md:px-4 md:pl-8">
              <span className="font-serif text-3xl font-light italic text-gold/65 shrink-0">03</span>
              <div>
                <h5 className="text-[10px] uppercase tracking-wider font-extrabold text-gold">Paso 3</h5>
                <p className="text-xs text-paper/70 font-sans mt-0.5 leading-snug">Asiste a tu valoración gratuita</p>
              </div>
            </div>
          </div>
        </div>

        {/* Browser styled calendar frame */}
        <div id="calendar-section" className="w-full pt-4">
          <div className="bg-white border border-gold/15 rounded-3xl overflow-hidden shadow-2xl shadow-gold/5 flex flex-col">
            {/* Header / Top Bar of the Browser frame */}
            <div className="bg-paper border-b border-gold/10 py-4 px-6 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-gold/30" />
                <div className="w-3 h-3 rounded-full bg-gold/20" />
                <div className="w-3 h-3 rounded-full bg-gold/10" />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-ink/50 font-bold font-sans">
                  Calendario Oficial del Dr. Jorge Flores
                </span>
              </div>
              <div className="w-[44px]" /> {/* Spacer for symmetry */}
            </div>

            {/* Iframe section */}
            <div className="w-full bg-white relative">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/YuYmzjykWUQqgFEyXZLR" 
                style={{ width: '100%', border: 'none', minHeight: '1800px' }} 
                scrolling="yes" 
                id="YuYmzjykWUQqgFEyXZLR_1774729660641"
                title="Agendamiento Dr Jorge Flores"
              />
            </div>
          </div>
        </div>

      </main>

      <footer className="py-12 border-t border-gold/5 bg-paper/30 mt-12 text-center space-y-2">
        <p className="text-[9px] uppercase tracking-[0.3em] text-ink/40 font-semibold">
          © 2026 Dr Jorge Flores • Premium Care
        </p>
        <p className="text-[8px] uppercase tracking-[0.15em] text-gold/60 font-sans">
          Guadalajara, Jalisco, México
        </p>
      </footer>
    </div>
  );
}

