import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function About() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const content = {
    pt: {
      title: 'Sobre Mim',
      intro: 'Sou um desenvolvedor focado em criar soluções web modernas, acessíveis e bem estruturadas.',
      trajectoryTitle: 'Trajetória',
      skillsTitle: 'Habilidades',
      interestsTitle: 'Interesses',
      objectivesTitle: 'Objetivos',
      description:
        'Graduando em Engenharia de Software, venho desenvolvendo projetos acadêmicos e pessoais com foco em front-end e full stack. Gosto de transformar ideias em produtos reais, priorizando performance, legibilidade de código e boa experiência do usuário.',
      skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker', 'REST APIs'],
      interests:
        'Tenho interesse em desenvolvimento web, produtos digitais, open source e boas práticas de arquitetura de software.',
      objectives:
        'Meu objetivo é evoluir como engenheiro de software, contribuir em projetos desafiadores e gerar impacto positivo por meio da tecnologia.',
      educationLabel: 'Formação:',
      educationValue: 'Engenharia de Software - PUC Minas',
      locationLabel: 'Localização:',
      locationValue: 'Belo Horizonte, MG',
    },
    en: {
      title: 'About Me',
      intro: 'I am a developer focused on building modern, accessible, and well-structured web solutions.',
      trajectoryTitle: 'Journey',
      skillsTitle: 'Skills',
      interestsTitle: 'Interests',
      objectivesTitle: 'Goals',
      description:
        'As a Software Engineering student, I have been building academic and personal projects focused on front-end and full stack development. I enjoy turning ideas into real products while prioritizing performance, code quality, and user experience.',
      skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker', 'REST APIs'],
      interests:
        'I am interested in web development, digital products, open source, and software architecture best practices.',
      objectives:
        'My goal is to grow as a software engineer, contribute to challenging projects, and create a positive impact through technology.',
      educationLabel: 'Education:',
      educationValue: 'Software Engineering - PUC Minas',
      locationLabel: 'Location:',
      locationValue: 'Belo Horizonte, Brazil',
    },
  };

  const current = content[language];

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container">
        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-4 py-2 rounded-md transition-smooth font-medium text-sm ${
                language === 'pt'
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:bg-white'
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-md transition-smooth font-medium text-sm ${
                language === 'en'
                  ? 'bg-primary text-white'
                  : 'text-foreground hover:bg-white'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Header */}
        <div className="accent-line mb-12 animate-slideInLeft">
          <h1 className="text-5xl font-bold text-foreground mb-4">{current.title}</h1>
          <p className="text-xl text-primary font-semibold">{current.intro}</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Description */}
          <div className="animate-slideInLeft">
            <h2 className="text-2xl font-bold text-foreground mb-4">{current.trajectoryTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {current.description}
            </p>
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{current.educationLabel}</span> {current.educationValue}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold text-foreground">{current.locationLabel}</span> {current.locationValue}
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slideInRight">
            <h2 className="text-2xl font-bold text-foreground mb-4">{current.skillsTitle}</h2>
            <div className="grid grid-cols-2 gap-3">
              {current.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center hover:bg-primary/20 transition-smooth"
                >
                  <p className="font-semibold text-foreground text-sm">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests and Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 animate-fadeInUp">
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Globe size={24} className="text-primary" />
              {current.interestsTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {current.interests}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Globe size={24} className="text-primary" />
              {current.objectivesTitle}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {current.objectives}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
