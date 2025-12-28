import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-16 pb-8 px-4"
    >
      <div className="text-center max-w-3xl animate-fade-in-up">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary rounded-full">
          Disponível para novos projetos
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Desenvolvedor{" "}
          <span className="text-gradient">Full Stack</span>
        </h1>

        <p className="text-base md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Transformo ideias em experiências digitais incríveis. Especializado
          em criar aplicações web modernas e escaláveis com Java e Spring Boot.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Ver Projetos
            <ChevronDown size={18} />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Entre em Contato
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/GustavoInTech"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavointech/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:gustavorodri.dev@gmail.com"
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;