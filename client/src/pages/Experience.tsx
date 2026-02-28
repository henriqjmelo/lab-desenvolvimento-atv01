import { Briefcase, Award, Code } from 'lucide-react';

interface Experience {
  id: number;
  type: 'work' | 'education' | 'event';
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

export default function Experience() {
  const experiences: Experience[] = [
    {
      id: 1,
      type: 'work',
      title: 'Desenvolvedor Full Stack',
      company: 'Tech Solutions Inc.',
      period: '2023 - Presente',
      description: 'Desenvolvimento de aplicações web escaláveis usando React, Node.js e PostgreSQL. Responsável por arquitetura de sistemas e otimização de performance.',
      icon: <Briefcase className="text-primary" size={24} />,
    },
    {
      id: 2,
      type: 'work',
      title: 'Desenvolvedor Frontend',
      company: 'Digital Agency',
      period: '2022 - 2023',
      description: 'Criação de interfaces responsivas com React e Tailwind CSS. Implementação de animações e melhorias de UX. Colaboração com designers e backend developers.',
      icon: <Briefcase className="text-primary" size={24} />,
    },
    {
      id: 3,
      type: 'education',
      title: 'Engenharia de Software',
      company: 'PUC Minas',
      period: '2020 - 2024',
      description: 'Formação em Engenharia de Software com foco em desenvolvimento web, arquitetura de sistemas e metodologias ágeis.',
      icon: <Award className="text-primary" size={24} />,
    },
    {
      id: 4,
      type: 'event',
      title: 'Contribuidor Open Source',
      company: 'Comunidade GitHub',
      period: '2023 - Presente',
      description: 'Contribuições regulares em projetos open source. Participação em code reviews e discussões técnicas com a comunidade.',
      icon: <Code className="text-primary" size={24} />,
    },
    {
      id: 5,
      type: 'event',
      title: 'Participante - Tech Conference 2023',
      company: 'DevCon Brasil',
      period: 'Setembro 2023',
      description: 'Participação em conferência de desenvolvimento com palestras sobre React, performance e arquitetura de aplicações modernas.',
      icon: <Award className="text-primary" size={24} />,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container">
        {/* Header */}
        <div className="accent-line mb-16 animate-slideInLeft">
          <h1 className="text-5xl font-bold text-foreground mb-4">Experiência</h1>
          <p className="text-xl text-primary font-semibold">
            Minha trajetória profissional e acadêmica
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-primary/20"></div>

          {/* Experiences */}
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative md:pl-32 animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-2 w-16 h-16 items-center justify-center">
                  <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                    {exp.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-gradient-to-br from-white to-secondary/30 rounded-xl p-8 border border-border shadow-md hover:shadow-lg transition-smooth">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Type badge */}
                  <div className="mt-4 flex gap-2">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        exp.type === 'work'
                          ? 'bg-blue-100 text-blue-700'
                          : exp.type === 'education'
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {exp.type === 'work'
                        ? 'Trabalho'
                        : exp.type === 'education'
                        ? 'Educação'
                        : 'Evento'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
