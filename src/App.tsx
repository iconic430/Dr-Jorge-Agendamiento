/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const SERVICES = [
  {
    title: "PROTOCOLO DE TRANSFORMACIÓN TOTAL",
    subtitle: "8 Carillas de Porcelana",
    featured: true,
    prices: {
      before: "$54,799",
      today: "$44,999",
      monthly: "$1,250",
      savings: "$9,800"
    },
    features: [
      { label: "8 CARILLAS DE PORCELANA", price: "$43,999", badge: "INCLUIDO" },
      { label: "DISEÑO DE SONRISA DIGITAL", price: "$2,000", badge: "50% DESCUENTO" },
      { label: "ANÁLISIS FACIAL", price: "$400", badge: "INCLUIDO" },
      { label: "BLANQUEAMIENTO", price: "$3,000", badge: "INCLUIDO" },
      { label: "LIMPIEZA COMPLETA", price: "$1,200", badge: "INCLUIDO" },
      { label: "CONSULTA ESPECIALIZADA", price: "$800", badge: "INCLUIDO" },
      { label: "FOTOGRAFÍA CLÍNICA PROFESIONAL", price: "$400", badge: "INCLUIDO" }
    ]
  },
  {
    title: "SMILE EXPRESS PROTOCOL",
    subtitle: "8 Carillas de Cerámica Híbrida",
    featured: false,
    prices: {
      before: "$32,800",
      today: "$24,999",
      monthly: "$695",
      savings: "$7,801"
    },
    features: [
      { label: "8 CARILLAS HÍBRIDAS", price: "$24,000", badge: "INCLUIDO" },
      { label: "DISEÑO DE SONRISA DIGITAL", price: "$2,000", badge: "50% DESCUENTO" },
      { label: "ANÁLISIS FACIAL", price: "$400", badge: "INCLUIDO" },
      { label: "BLANQUEAMIENTO", price: "$3,000", badge: "INCLUIDO" },
      { label: "LIMPIEZA COMPLETA", price: "$1,200", badge: "INCLUIDO" },
      { label: "CONSULTA ESPECIALIZADA", price: "$800", badge: "INCLUIDO" },
      { label: "FOTOGRAFÍA CLÍNICA PROFESIONAL", price: "$400", badge: "INCLUIDO" }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-paper selection:bg-gold/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-ink/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg md:text-2xl font-serif font-semibold tracking-tight text-ink uppercase">Dr. Jorge Flores</span>
            <span className="text-[7px] md:text-[10px] uppercase tracking-[0.2em] text-gold font-bold -mt-1">Estética Dental Avanzada</span>
          </div>

          <div className="flex items-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#formulario" 
              className="bg-ink text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl hover:bg-gold transition-all duration-300 shadow-lg shadow-ink/10 text-[10px] md:text-sm font-bold uppercase tracking-widest"
            >
              Agendar Cita
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden px-4">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] md:text-xs font-black uppercase tracking-[0.25em] mb-10">
              <Sparkles size={16} />
              <span>Sonrisas que proyectan éxito</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-serif leading-[1.05] mb-10 text-ink tracking-tight uppercase">
              Redefine tu <span className="italic text-gold block">Imagen</span>
            </h1>
            <p className="text-lg md:text-xl text-ink/60 mb-14 max-w-2xl leading-relaxed italic font-serif px-2">
              Especialista en carillas de porcelana y diseño de sonrisa. 
              Transformamos vidas con honestidad y tecnología de punta.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto mb-20 px-2">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#servicios" 
                className="w-full sm:w-auto bg-ink text-white px-12 py-6 rounded-[2rem] text-sm font-black uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 shadow-2xl shadow-ink/30"
              >
                Ver Paquetes
              </motion.a>
              <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-[2rem] border border-ink/5 shadow-sm">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/patient${i}/100/100`} 
                      className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                      referrerPolicy="no-referrer"
                      alt="Paciente"
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-gold mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-[10px] text-ink/70 font-black uppercase tracking-widest text-nowrap">+500 Sonrisas</p>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid gap-10 items-center bg-gold/5 p-8 md:p-12 rounded-[3.5rem] border border-gold/10 text-center md:text-left w-full max-w-3xl"
            >
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="relative shrink-0">
                  <div className="w-44 h-44 md:w-56 md:h-56 rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-gold/20">
                    <img 
                      src="https://i.postimg.cc/wxfrHkq2/IMG-3316.jpg" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      alt="Dr. Jorge Flores"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gold text-white p-3 rounded-2xl shadow-xl border-4 border-paper">
                    <CheckCircle2 size={24} />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight uppercase">Pasión por la <span className="italic text-gold">Excelencia</span></h2>
                  <p className="text-base text-ink/70 leading-relaxed mb-8 italic font-serif">
                    "Especialista dedicado a la excelencia en cada carilla. Mi compromiso es con la calidad estética y tu bienestar bucal a largo plazo. Diseño sonrisas que transforman tu apariencia mientras cuidan tu salud dental durante años."
                  </p>
                  <div className="flex justify-center md:justify-start gap-12">
                    <div>
                      <p className="text-4xl font-serif text-gold font-bold neon-gold">100%</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black text-ink/40">Ética</p>
                    </div>
                    <div>
                      <p className="text-4xl font-serif text-gold font-bold neon-gold">2026</p>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black text-ink/40">Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quiz/Identification Section */}
      <section className="py-24 md:py-32 bg-ink text-white rounded-[3rem] md:rounded-[6rem] mx-2 md:mx-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -ml-48 -mb-48" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-7xl font-serif mb-16 uppercase tracking-tight leading-tight">
              ¿Te <span className="italic text-gold">identificas?</span>
            </h2>
            
            <div className="grid gap-6 md:gap-8">
              {[
                "Sientes que tu sonrisa no refleja quién realmente eres.",
                "Has consultado antes, pero no te dieron un plan claro ni personalizado.",
                "Te preocupa que un tratamiento dental se vea artificial o fuera de lugar.",
                "Quieres un cambio real, pero no sabes por dónde empezar."
              ].map((text, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 p-6 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-500 group text-left"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20 group-hover:bg-gold transition-all duration-500 shadow-lg shadow-gold/5">
                    <CheckCircle2 size={28} className="text-gold group-hover:text-white transition-colors duration-500" />
                  </div>
                  <p className="text-xl md:text-2xl text-white/70 font-serif italic group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gold mb-4">Experiencias Exclusivas</h2>
            <h2 className="text-4xl md:text-7xl font-serif mb-8 text-ink uppercase tracking-tight">Paquetes de Diseño</h2>
            <div className="w-24 h-1.5 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 max-w-6xl mx-auto">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative bg-white p-6 md:p-14 rounded-[3rem] shadow-sm border transition-all duration-500 group flex flex-col w-full",
                  service.featured ? "border-gold/40 shadow-2xl ring-1 ring-gold/20" : "border-ink/5"
                )}
              >
                {service.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-white px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl z-30 whitespace-nowrap">
                    <Star size={14} fill="currentColor" />
                    EL MÁS ELEGIDO
                  </div>
                )}
                
                <div className="flex flex-col mb-10 text-center md:text-left">
                  <h3 className="text-3xl md:text-5xl font-serif leading-[1.1] mb-2 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xl md:text-2xl font-serif text-gold italic">
                    {service.subtitle}
                  </p>
                </div>

                <div className="bg-gold/5 rounded-[2.5rem] p-6 md:p-10 border border-gold/10 mb-10 relative">
                  <div className="flex justify-between items-center mb-6 text-ink/40 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                    <span>Inversión Regular:</span>
                    <span className="text-xl line-through decoration-gold/60 font-sans tracking-tight">{service.prices.before}</span>
                  </div>
                  
                  <div className="flex flex-col mb-8 text-center md:text-left">
                    <div className="flex justify-between items-end">
                       <span className="text-2xl font-serif text-ink font-bold italic">Hoy:</span>
                       <span className="text-5xl md:text-7xl font-sans text-gold font-black tracking-tighter">
                         {service.prices.today}
                       </span>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gold/10 border-dashed flex justify-between items-center">
                    <span className="text-[11px] md:text-sm font-black uppercase tracking-[0.2em] text-gold">TU AHORRO:</span>
                    <span className="bg-gold text-white px-6 py-2 rounded-full text-lg md:text-xl font-black shadow-lg min-w-[120px] text-center">
                      {service.prices.savings}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-5 mb-14 flex-grow">
                  {service.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[10px] md:text-[12px] font-black text-ink/90 uppercase tracking-widest group/item">
                      <div className="w-2 h-2 rounded-full bg-gold shrink-0 shadow-sm" />
                      <span className="shrink-0 max-w-[130px] md:max-w-none truncate">{item.label}</span>
                      <div className="flex-grow border-b border-dotted border-ink/20 mt-4 mx-2" />
                      <div className="flex items-center gap-2 md:gap-4 shrink-0">
                        {item.price && (
                          <span className="text-ink/30 line-through decoration-gold/40 font-sans text-[10px] md:text-sm">
                            {item.price}
                          </span>
                        )}
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-tighter neon-gold px-2 py-1 rounded border border-gold/10 bg-gold/5">
                          {item.badge}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#formulario" 
                  className="w-full py-6 md:py-8 rounded-[2rem] bg-ink text-white font-black uppercase tracking-[0.3em] text-[10px] md:text-xs hover:bg-gold transition-all duration-500 text-center block shadow-2xl shadow-ink/20"
                >
                  Garantizar mi lugar
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="formulario" className="py-24 md:py-32 bg-gold/5 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-6xl font-serif text-ink mb-6 uppercase tracking-tight">Valoración Sin Costo</h3>
            <p className="text-gold font-bold tracking-widest text-xs uppercase italic">solo 3 cupos por dia</p>
          </div>
          <div className="bg-white p-2 md:p-10 rounded-[3rem] md:rounded-[4rem] shadow-2xl border border-gold/10 overflow-hidden relative min-h-[758px]">
             <div className="absolute inset-x-0 top-0 h-1 bg-gold" />
             <iframe
                src="https://api.leadconnectorhq.com/widget/form/CsKJR0HLUcXRbyRYfdrL"
                style={{ width: '100%', height: '758px', border: 'none' }}
                id="inline-CsKJR0HLUcXRbyRYfdrL" 
                title="Agenda tu valoración"
              ></iframe>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-24 md:py-32 bg-ink text-white rounded-t-[4rem] md:rounded-t-[6rem] mx-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl md:text-7xl font-serif mb-12 uppercase leading-tight">Contacto & <span className="italic text-gold">Ubicación</span></h2>
              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-gold/20 transition-colors">
                    <Phone className="text-gold" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif mb-2 uppercase tracking-wide">Línea Directa</h4>
                    <p className="text-white/60 text-lg">+52 33 1234 5678</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-gold/20 transition-colors">
                    <MapPin className="text-gold" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif mb-2 uppercase tracking-wide">Estudio Dental</h4>
                    <p className="text-white/60 text-lg">Sierra Morena 326, Independencia Ote.</p>
                    <p className="text-gold font-bold uppercase tracking-widest text-[10px] mt-2">Guadalajara, Jalisco</p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-gold/20 transition-colors">
                    <Clock className="text-gold" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-serif mb-2 uppercase tracking-wide">Horario Elite</h4>
                    <div className="text-white/60 space-y-1 block italic font-serif">
                      <p>Mó - Vi: 10:00 - 19:00</p>
                      <p>Sá - Do: Previa Cita</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden border-4 border-white/5 h-[400px] md:h-auto shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.766158765432!2d-103.3304567!3d20.6902345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e3db93fb23%3A0xf459e1fffcdc6bd8!2sDr%20Jorge%20Flores%20Dentista%20-%20Carillas%20GDL!5e0!3m2!1ses-419!2smx!4v1708900000000!5m2!1ses-419!2smx" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-ink px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col">
            <span className="text-3xl font-serif font-black tracking-tighter text-white uppercase">Dr. Jorge Flores</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-black">Estética Dental GDL</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
