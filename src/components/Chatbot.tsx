import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi! I'm here to help you learn about Digital Tech services. Ask me about courses, pricing, or anything else!",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);

    // Simple rule-based responses
    setTimeout(() => {
      const response = getResponse(input.toLowerCase());
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
    }, 500);

    setInput("");
  };

  const getResponse = (query: string) => {
    if (query.includes("price") || query.includes("cost")) {
      return "Our training courses range from ₦20,000 to ₦80,000. Graphic Design (₦50,000), Website Creation (₦80,000), AI Automation (₦25,000), Ebook Publishing (₦30,000), Content Creation (₦50,000), Song Creation (₦20,000). Would you like to register?";
    }
    if (query.includes("course") || query.includes("training")) {
      return "We offer 6 training programs: Graphic Design, Website Creation, AI Automation, Ebook Publishing, Content Creation, and Song Creation. Each includes hands-on tools and practical skills. Which interests you?";
    }
    if (query.includes("register") || query.includes("signup")) {
      return "Great! You can register by clicking the 'Register Now' button on our homepage or visiting our registration page. Need help with anything else?";
    }
    if (query.includes("payment") || query.includes("pay")) {
      return "After registration, you can make payment via bank transfer to: Oyeniyi Ifakunle, Access Bank, 1809959229. Confirm payment via WhatsApp at 08089376351.";
    }
    if (query.includes("contact") || query.includes("reach")) {
      return "You can reach us at 08089376351 (Call/WhatsApp), email: oyeniyiifakunle@gmail.com, or connect via Facebook, Instagram, LinkedIn, or Telegram. How can I help you today?";
    }
    return "I can help you with information about our courses, pricing, registration, and payment. What would you like to know?";
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-glow-primary bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[500px] flex flex-col bg-card border-border shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border bg-gradient-accent">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary-foreground" />
              <h3 className="font-semibold text-primary-foreground">Chat Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
