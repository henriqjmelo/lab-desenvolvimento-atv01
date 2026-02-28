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
  image?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com carrinho de compras, pagamento integrado e painel administrativo.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com sincronização em tempo real e colaboração em equipe.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dashboard de previsão do tempo com integração de API, gráficos interativos e localização automática.',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Plataforma de blog com editor de markdown, categorias, busca e sistema de comentários.',
      technologies: ['Next.js', 'Markdown', 'PostgreSQL', 'Vercel'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Website de portfólio responsivo com design moderno, animações suaves e otimização de performance.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://example.com',
      date: '2024',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-secondary/30 py-20">
      <div className="container">
        {/* Header */}
        <div className="accent-line mb-16 animate-slideInLeft">
          <h1 className="text-5xl font-bold text-foreground mb-4">Projetos</h1>
          <p className="text-xl text-primary font-semibold">
            Alguns dos meus trabalhos recentes
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-primary/20"></div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, idx) => (
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
                    <div className="hidden md:block">
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
                    <div className="hidden md:block">
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
