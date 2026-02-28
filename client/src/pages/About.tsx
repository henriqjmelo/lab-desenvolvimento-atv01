import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function About() {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  const content = {
    pt: {
      title: 'Sobre Mim',
      intro: 'Intor genérica',
      description: 'Com formação em Engenharia de Software, tenho experiência em desenvolvimento full stack, bla bla bla.',
      skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker', 'REST APIs'],
      interests: 'Tenho interesse em desenvolvimento web, open source, design de interfaces e otimização de performance.',
      objectives: 'Meu objetivo é contribuir para projetos desafiadores, crescer como desenvolvedor e impactar positivamente através da tecnologia.',
    },
    en: {
      title: 'About Me',
      intro: 'I am a developer passionate about creating modern and accessible web solutions.',
      description: 'With a background in Software Engineering, I have experience in full stack development, focusing on React, Node.js and scalable application architecture. I enjoy solving complex problems and learning new technologies.',
      skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker', 'REST APIs'],
      interests: 'I am interested in web development, open source, interface design and performance optimization.',
      objectives: 'My goal is to contribute to challenging projects, grow as a developer and make a positive impact through technology.',
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Trajetória</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {current.description}
            </p>
            <div className="bg-secondary rounded-lg p-6 border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Formação:</span> Engenharia de Software - PUC Minas
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <span className="font-semibold text-foreground">Localização:</span> Belo Horizonte, MG
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-slideInRight">
            <h2 className="text-2xl font-bold text-foreground mb-4">Habilidades</h2>
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
              Interesses
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {current.interests}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border border-primary/20 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Globe size={24} className="text-primary" />
              Objetivos
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
