import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      message: !formData.message.trim(),
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setIsLoading(true);
      try {
        await emailjs.send(
           import.meta.env.VITE_EMAILJS_SERVICE_ID,
           import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Gustavo",
            reply_to: formData.email,
          },
           import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Você receberá uma confirmação por email!",
          duration: 5000,
        });
        setFormData({ name: "", email: "", message: "" });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente mais tarde.",
          variant: "destructive",
          duration: 5000,
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Entre em Contato
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Tem um projeto em mente? Vamos conversar sobre como posso ajudar a
          torná-lo realidade.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Informações de Contato
            </h3>
            <p className="text-muted-foreground mb-6">
              Estou sempre aberto a novas oportunidades e colaborações. Sinta-se
              à vontade para entrar em contato!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:gustavorodri.dev@gmail.com"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    gustavorodri.dev@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/gustavointech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">
                    /in/gustavointech
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-sm text-muted-foreground">
                    Brasil • Remoto
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${errors.name ? 'border-red-500' : 'border-border'}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">Nome é obrigatório</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors ${errors.email ? 'border-red-500' : 'border-border'}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">Email válido é obrigatório</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-border'}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">Mensagem é obrigatória</p>}
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <a
                href="https://www.linkedin.com/in/gustavointech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold text-lg hover:opacity-80 transition-opacity"
              >
                GustavoInTech
              </a>
              <p className="text-sm text-muted-foreground">
                Desenvolvendo o futuro, uma linha de código por vez.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/GustavoInTech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/gustavointech/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:gustavorodri.dev@gmail.com"
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            © 2025 GustavoInTech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;