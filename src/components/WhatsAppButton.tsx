import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/2348089376351"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;