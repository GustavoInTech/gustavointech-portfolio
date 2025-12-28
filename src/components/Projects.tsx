import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "API REST E-Commerce",
    description:
      "API completa para e-commerce com autenticação JWT, gerenciamento de produtos, carrinho e integração de pagamentos.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    github: "https://github.com/GustavoInTech",
    live: "#",
  },
  {
    title: "Sistema de Gestão",
    description:
      "Sistema de gerenciamento empresarial com módulos de funcionários, inventário e relatórios.",
    tags: ["Java", "Spring MVC", "Hibernate", "MySQL"],
    github: "https://github.com/GustavoInTech",
    live: "#",
  },
  {
    title: "Microservices Platform",
    description:
      "Arquitetura de microserviços com Spring Cloud, Gateway, Discovery Server e Config Server.",
    tags: ["Spring Cloud", "Docker", "RabbitMQ", "Redis"],
    github: "https://github.com/GustavoInTech",
    live: "#",
  },
  {
    title: "Task Manager API",
    description:
      "API RESTful para gerenciamento de tarefas com documentação Swagger e testes unitários.",
    tags: ["Java", "Spring Boot", "JUnit", "Swagger"],
    github: "https://github.com/GustavoInTech",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Projetos em Destaque
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Uma seleção dos meus trabalhos mais recentes e projetos que demonstram
          minhas habilidades no ecossistema Java.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary/30">
                  {`0${index + 1}`}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1 text-sm text-primary hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    Ver Projeto
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
