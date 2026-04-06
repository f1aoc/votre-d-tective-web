import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content: "Bonjour ! Je suis l'assistant virtuel d'Investigators. Comment puis-je vous aider ? Je peux vous renseigner sur nos services, notre processus d'investigation ou vous guider vers une consultation confidentielle.",
};

const BOT_RESPONSES: Record<string, string> = {
  service: "Nous proposons plusieurs services : **Surveillance & Filature**, **Vérification d'antécédents**, **Forensique numérique**, **Opérations sous couverture** et **Compilation de rapports**. Souhaitez-vous en savoir plus sur l'un d'entre eux ?",
  tarif: "Nos tarifs dépendent de la complexité de l'affaire. Je vous invite à réserver une consultation confidentielle gratuite pour obtenir un devis personnalisé. Souhaitez-vous que je vous mette en relation ?",
  prix: "Nos tarifs dépendent de la complexité de l'affaire. Je vous invite à réserver une consultation confidentielle gratuite pour obtenir un devis personnalisé. Souhaitez-vous que je vous mette en relation ?",
  processus: "Notre processus se déroule en 3 étapes :\n\n1. **Briefing initial** — Consultation confidentielle pour définir les objectifs\n2. **Investigation ciblée** — Déploiement de nos ressources\n3. **Rapport final** — Livraison d'un rapport complet avec conclusions et preuves",
  contact: "Vous pouvez nous contacter par email à **contact@investigators.fr** ou réserver directement une consultation confidentielle via le bouton en bas de page. Toute communication est protégée par le secret professionnel.",
  confidentialité: "La confidentialité est au cœur de notre activité. Chaque échange, chaque dossier et chaque preuve sont protégés par le secret professionnel le plus strict. Aucune information n'est jamais divulguée à des tiers.",
  surveillance: "Notre service de **Surveillance & Filature** comprend des opérations discrètes et méthodiques. Nous utilisons des technologies de pointe et des agents expérimentés pour documenter les faits avec précision.",
  urgent: "Pour les affaires urgentes, nous pouvons activer une équipe dédiée dans les 24h. Contactez-nous immédiatement à **contact@investigators.fr** en mentionnant le caractère urgent de votre demande.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(BOT_RESPONSES)) {
    if (lower.includes(key)) return response;
  }
  if (lower.includes("bonjour") || lower.includes("salut") || lower.includes("hello")) {
    return "Bonjour ! Comment puis-je vous aider aujourd'hui ? N'hésitez pas à me poser vos questions sur nos services d'investigation.";
  }
  if (lower.includes("merci")) {
    return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions. La confidentialité de nos échanges est garantie.";
  }
  return "Merci pour votre message. Pour une réponse plus détaillée et personnalisée, je vous recommande de réserver une consultation confidentielle avec l'un de nos enquêteurs. Puis-je vous aider avec autre chose ?";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(userMsg.content);
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-gradient flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="text-primary-foreground w-6 h-6" /> : <MessageCircle className="text-primary-foreground w-6 h-6" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-card border border-border shadow-2xl flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-border flex items-center gap-3">
              <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                <span className="text-sm">🕵️</span>
              </div>
              <div>
                <div className="text-foreground font-display text-sm">Investigators</div>
                <div className="text-xs text-muted-foreground font-body">Assistant confidentiel</div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 text-sm font-body leading-relaxed ${
                      msg.role === "user"
                        ? "gold-gradient text-primary-foreground rounded-t-lg rounded-bl-lg"
                        : "bg-secondary text-foreground rounded-t-lg rounded-br-lg"
                    }`}
                  >
                    {msg.content.split("\n").map((line, j) => (
                      <span key={j}>
                        {line.split(/\*\*(.*?)\*\*/g).map((part, k) =>
                          k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                        )}
                        {j < msg.content.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary text-foreground px-4 py-3 rounded-t-lg rounded-br-lg">
                    <span className="flex gap-1">
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                      <span className="w-2 h-2 bg-muted-foreground rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder="Votre message..."
                className="flex-1 bg-secondary text-foreground px-4 py-2 text-sm font-body placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary rounded-sm"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="gold-gradient text-primary-foreground p-2 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
