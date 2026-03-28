/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// --- Types ---
type TimeSlot = string;

// --- Constants ---
const DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const TIME_SLOTS: TimeSlot[] = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
];

export default function App() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen bg-paper flex flex-col">
      {/* Header */}
      <header className="py-8 px-8 flex justify-center items-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center">
            <span className="font-serif text-gold text-2xl font-bold italic">JF</span>
          </div>
          <h1 className="text-3xl font-serif tracking-[0.3em] uppercase text-ink">Jorge Flores</h1>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-8 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full space-y-12"
            >
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl font-serif text-ink leading-tight max-w-2xl mx-auto">
                  Reserva tu sesión de valoración gratuita
                </h2>
              </div>

              <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-white border border-gold/10 rounded-3xl shadow-2xl shadow-gold/5 flex items-center justify-center group cursor-pointer hover:border-gold/30 transition-all" onClick={() => setStep(2)}>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                    <ChevronRight className="w-8 h-8 text-gold" />
                  </div>
                  <span className="font-serif text-3xl tracking-widest text-ink/40 uppercase group-hover:text-gold transition-colors">
                    Calendario
                  </span>
                </div>
              </div>
            </motion.div>
          )}


          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="w-full max-w-2xl"
            >
              <div className="bg-white border border-gold/10 rounded-3xl p-10 shadow-2xl shadow-gold/5">
                <button onClick={() => setStep(1)} className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold mb-8 hover:translate-x-[-4px] transition-transform">
                  <ChevronLeft className="w-4 h-4" /> Volver
                </button>
                
                <h2 className="text-4xl font-serif text-ink mb-2">Tus Detalles</h2>
                <p className="text-ink/60 mb-10">Confirma tu cita el {selectedDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })} a las {selectedTime}.</p>

                <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-1">Nombre</label>
                      <input required type="text" className="w-full bg-paper/50 border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold text-ink/40 ml-1">Email</label>
                      <input required type="email" className="w-full bg-paper/50 border border-gold/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold transition-colors" />
                    </div>
                  </div>
                  <button type="submit" className="w-full py-5 bg-ink text-paper rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold transition-all shadow-xl">
                    Confirmar Cita
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <div className="space-y-4">
                <h2 className="text-5xl font-serif text-ink">¡Confirmado!</h2>
                <p className="text-ink/60">Tu cita ha sido agendada con éxito.</p>
              </div>
              <button 
                onClick={() => { setStep(1); setSelectedTime(null); }}
                className="text-gold text-xs uppercase tracking-widest font-bold hover:underline"
              >
                Volver al inicio
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
