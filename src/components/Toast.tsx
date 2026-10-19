import React from 'react';
import { useCart } from '../context/CartContext';
import { CheckCircle2, Info, Sparkles, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 sm:right-6 z-[999990] flex flex-col space-y-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start p-4 rounded-xl glass-luxury border border-[#D4AF37]/40 shadow-card-luxury text-[#F6F1E7] animate-[slideIn_0.3s_ease-out] backdrop-blur-xl bg-[#181815]/95"
        >
          <div className="mr-3 mt-0.5 text-[#F5D77A] flex-shrink-0">
            {toast.type === 'gold' ? (
              <Sparkles className="w-5 h-5 text-[#F5D77A]" />
            ) : toast.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
            ) : (
              <Info className="w-5 h-5 text-[#A8A18F]" />
            )}
          </div>
          <div className="flex-1 pr-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5D77A]">
              {toast.title}
            </h4>
            <p className="text-xs text-[#A8A18F] mt-1 leading-relaxed">{toast.message}</p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-[#A8A18F] hover:text-[#F6F1E7] p-1 transition-colors flex-shrink-0"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
