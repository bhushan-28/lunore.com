import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Sparkles, Mail, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const schema = z.object({
  email: z.string().email({ message: 'Please enter a valid luxury invitation email address' }),
});

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = () => {
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      colors: ['#D9C2A3', '#B88A44', '#FFFFFF']
    });
    reset();
  };

  return (
    <section className="py-32 sm:py-40 bg-[#1B1717] relative z-10 px-6 sm:px-12 lg:px-16 border-t border-[#B88A44]/20 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B88A44]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        <div className="glass-card-gold p-10 sm:p-20 rounded-3xl border border-[#B88A44]/40 shadow-2xl space-y-7">

          <div className="w-16 h-16 mx-auto border border-[#B88A44]/40 rounded-full flex items-center justify-center text-[#D9C2A3] bg-[#3B2A2A]/50">
            <Mail className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-2 font-inter text-xs tracking-[0.35em] uppercase text-[#D9C2A3]">
            <Sparkles className="w-4 h-4 text-[#B88A44]" />
            Le Club Privé LUNORÉ
          </div>

          <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide">
            Join the Circle of Connoisseurs
          </h2>

          <p className="font-inter text-xs sm:text-sm text-[#F8F5F2]/80 leading-relaxed font-light max-w-xl mx-auto">
            Receive private invitations to limited-edition vault releases, complimentary 2ml sample sets with every edition, and bespoke olfactory consultations.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-7 bg-[#1B1717]/80 rounded-2xl border border-[#B88A44] max-w-md mx-auto flex items-center justify-center gap-4 text-[#D9C2A3]"
            >
              <CheckCircle2 className="w-7 h-7 text-[#B88A44]" />
              <div className="text-left font-inter">
                <div className="font-cormorant text-2xl font-semibold text-white">Welcome to Le Club Privé</div>
                <div className="text-xs text-[#F8F5F2]/70 mt-0.5">Your invitation token has been dispatched.</div>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-3">
              <div className="relative">
                <input
                  type="email"
                  {...register('email')}
                  placeholder="Enter your personal email address..."
                  className="w-full bg-[#1B1717] border border-[#B88A44]/40 rounded-full px-7 py-4.5 font-inter text-xs text-white placeholder-[#D9C2A3]/50 focus:outline-none focus:border-[#D9C2A3] transition-colors pr-36"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-7 bg-gradient-to-r from-[#D9C2A3] via-[#B88A44] to-[#8C6226] text-black font-inter text-xs tracking-wider uppercase font-semibold rounded-full hover:brightness-110 transition-all flex items-center gap-1.5 shadow-lg"
                >
                  Join <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {errors.email && (
                <p className="font-inter text-xs text-red-400 font-light">
                  {errors.email.message}
                </p>
              )}
            </form>
          )}

          <div className="flex items-center justify-center gap-2 font-inter text-[11px] text-[#D9C2A3]/60 pt-2">
            <ShieldCheck className="w-4 h-4 text-[#B88A44]" />
            <span>Strictly Confidential • No Spam Guarantee • Unsubscribe Anytime</span>
          </div>

        </div>

      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />
    </section>
  );
}
