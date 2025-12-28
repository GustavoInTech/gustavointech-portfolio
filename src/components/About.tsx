import { Code2, Lightbulb, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Escrevo código organizado, legível e de fácil manutenção, aplicando boas práticas, padrões de projeto e atenção à qualidade desde o início.",
  },
  {
    icon: Lightbulb,
    title: "Soluções Criativas",
    description:
      "Gosto de analisar problemas reais e transformar requisitos complexos em soluções simples, eficientes e bem estruturadas.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Tenho foco em desenvolver aplicações backend performáticas, seguras e escaláveis, pensando sempre em eficiência e experiência do usuário.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Valorizo trabalho em equipe, comunicação clara e troca de conhecimento, contribuindo para entregas consistentes e de qualidade.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Sobre Mim
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
         Sou desenvolvedor focado em backend, apaixonado por tecnologia e 
         pela construção de soluções que resolvem problemas reais. 
         Tenho experiência com Java, Spring Boot e APIs REST, 
         sempre buscando escrever código limpo, escalável e bem estruturado.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl border border-border p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">Minha Jornada</h3>
          <p className="text-muted-foreground mb-4">
            Comecei minha jornada na tecnologia ainda no ensino médio, 
            ao participar de um curso voltado para jovens aprendizes. 
            Foi ali que tive meu primeiro contato com computação, trabalhando com manutenção, 
            montagem de computadores e entendendo como tudo funcionava por trás.
          </p>
          <p className="text-muted-foreground">
            Com o tempo, a curiosidade cresceu através dos jogos de PC, 
            quando passei a querer entender como aqueles sistemas eram criados. 
            Esse interesse me levou à programação, conhecendo JavaScript e, 
            posteriormente, Java, onde encontrei desafios que me motivaram a focar no backend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;