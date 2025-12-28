const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Java", level: 95 },
      { name: "Spring Boot", level: 90 },
      { name: "Spring MVC", level: 88 },
      { name: "Hibernate/JPA", level: 85 },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 80 },
      { name: "Maven", level: 88 },
      { name: "JUnit", level: 85 },
    ],
  },
];

const additionalSkills = [
  "Spring Security",
  "Spring Cloud",
  "REST APIs",
  "Microservices",
  "Kafka",
  "RabbitMQ",
  "Docker",
  "Angular",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Habilidades & Tecnologias
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
          Tecnologias e ferramentas que domino e uso no dia a dia
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-primary mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {additionalSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-primary/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;