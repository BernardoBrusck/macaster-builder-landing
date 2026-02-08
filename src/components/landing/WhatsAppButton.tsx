import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Placeholder number - will be updated later
  const whatsappNumber = "5500000000000";
  const message = encodeURIComponent("Olá! Gostaria de mais informações sobre os materiais da Macaster.");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
      
      {/* Button */}
      <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-pulse-glow">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-foreground text-background text-sm font-medium px-3 py-2 rounded-lg whitespace-nowrap">
          Fale conosco!
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
