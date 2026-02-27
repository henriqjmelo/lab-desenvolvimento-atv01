import { useMemo, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  date: string;
  year: number;
  image?: string;
}

export default function Projects() {
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Site Institucional Responsivo',
      description:
        'Projeto acadêmico com foco em semântica HTML, responsividade e boas práticas de estilização para apresentação institucional.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/seu-usuario/site-institucional',
      date: '2022',
      year: 2022,
      image: '/projects/project-home.png',
    },
    {
      id: 2,
      title: 'Dashboard de Tarefas',
      description:
        'Aplicação para organização de tarefas com filtros, status e persistência local para acompanhamento do fluxo de trabalho.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/seu-usuario/dashboard-tarefas',
      date: '2023',
      year: 2023,
      image: '/projects/project-about.png',
    },
    {
      id: 3,
      title: 'API de Catálogo de Produtos',
      description:
        'Back-end REST para gerenciamento de produtos com validações, rotas CRUD e organização em camadas.',
      technologies: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com/seu-usuario/api-catalogo-produtos',
      date: '2024',
      year: 2024,
      image: '/projects/project-projects.png',
    },
    {
      id: 4,
      title: 'Portfólio Profissional (Lab 01)',
      description:
        'Portfólio completo com páginas Sobre, Projetos, Experiências e Contato, incluindo formulário funcional e design responsivo.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Express'],
      github: 'https://github.com/seu-usuario/lab-desenvolvimento-atv01',
      date: '2025',
      year: 2025,
      image: '/projects/project-experience.png',
    },
    {
      id: 5,
      title: 'Sistema de Agendamento',
      description:
        'Aplicação full stack para agendamentos com autenticação, confirmação de horários e interface adaptada para dispositivos móveis.',
      technologies: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/seu-usuario/sistema-agendamento',
      date: '2026',
      year: 2026,
      image: '/projects/project-contact.png',
    },
  ];

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(projects.map((project) => project.year)));
    return years.sort((a, b) => a - b);
  }, [projects]);

  const availableTechs = useMemo(() => {
    const technologies = new Set<string>();
    projects.forEach((project) => {
      project.technologies.forEach((technology) => technologies.add(technology));
    });

    return Array.from(technologies).sort((a, b) => a.localeCompare(b));
  }, [projects]);

  const timelineProjects = useMemo(() => {
    return projects
      .filter((project) => selectedYear === 'all' || project.year === selectedYear)
      .filter((project) => selectedTech === 'all' || project.technologies.includes(selectedTech))
      .sort((a, b) => a.year - b.year || a.id - b.id);
  }, [projects, selectedYear, selectedTech]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-secondary/30 py-20">
      <div className="container">
        {/* Header */}
        <div className="accent-line mb-16 animate-slideInLeft">
          <h1 className="text-5xl font-bold text-foreground mb-4">Projetos</h1>
          <p className="text-xl text-primary font-semibold">
            Linha do tempo dos meus projetos (do mais antigo ao mais recente)
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-border rounded-xl p-4">
            <label htmlFor="project-year" className="block text-sm font-semibold text-foreground mb-2">
              Filtrar por ano
            </label>
            <select
              id="project-year"
              value={selectedYear}
              onChange={(event) => {
                const value = event.target.value;
                setSelectedYear(value === 'all' ? 'all' : Number(value));
              }}
              className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground"
            >
              <option value="all">Todos os anos</option>
              {availableYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-white border border-border rounded-xl p-4">
            <label htmlFor="project-tech" className="block text-sm font-semibold text-foreground mb-2">
              Filtrar por tecnologia
            </label>
            <select
              id="project-tech"
              value={selectedTech}
              onChange={(event) => setSelectedTech(event.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground"
            >
              <option value="all">Todas as tecnologias</option>
              {availableTechs.map((technology) => (
                <option key={technology} value={technology}>
                  {technology}
                </option>
              ))}
            </select>
          </div>
        </div>

        {(selectedYear !== 'all' || selectedTech !== 'all') && (
          <div className="mb-10 flex justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setSelectedYear('all');
                setSelectedTech('all');
              }}
            >
              Limpar filtros
            </Button>
          </div>
        )}

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/20"></div>

          {/* Projects */}
          <div className="space-y-12">
            {timelineProjects.length === 0 && (
              <div className="bg-white border border-border rounded-xl p-8 text-center">
                <p className="text-muted-foreground">Nenhum projeto encontrado para os filtros selecionados.</p>
              </div>
            )}

            {timelineProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
                  idx % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'
                } animate-fadeInUp`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/4">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Content - alternating sides */}
                {idx % 2 === 0 ? (
                  <>
                    {/* Left */}
                    <div className="md:pr-8">
                      <div className="bg-white rounded-xl p-8 shadow-lg border border-border card-hover">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {project.date}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs font-mono bg-secondary text-foreground px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              <Github size={16} className="mr-2" />
                              GitHub
                            </Button>
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                                <ExternalLink size={16} className="mr-2" />
                                Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Right - Image */}
                    <div>
                      <div className="rounded-xl overflow-hidden shadow-lg border border-border card-hover">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left - Image */}
                    <div>
                      <div className="rounded-xl overflow-hidden shadow-lg border border-border card-hover">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                    {/* Right */}
                    <div className="md:pl-8">
                      <div className="bg-white rounded-xl p-8 shadow-lg border border-border card-hover">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {project.date}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs font-mono bg-secondary text-foreground px-2 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" size="sm">
                              <Github size={16} className="mr-2" />
                              GitHub
                            </Button>
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                                <ExternalLink size={16} className="mr-2" />
                                Demo
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
