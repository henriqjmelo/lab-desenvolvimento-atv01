import { ArrowRight, Code, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-secondary/30">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slideInLeft">
            <div className="accent-line mb-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Kaio Jorge
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mt-2">
                Desenvolvedor Full Stack
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Criando soluções web modernas, escaláveis e acessíveis. Especializado em React, Node.js e design responsivo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => onNavigate('projects')}
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Ver Projetos
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
              >
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="animate-slideInRight hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-3xl"></div>

              {/* Card stack effect */}
              <div className="relative space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-border transform hover:scale-105 transition-smooth">
                  <Code className="text-primary mb-3" size={32} />
                  <h3 className="font-bold text-foreground mb-2">Desenvolvimento</h3>
                  <p className="text-sm text-muted-foreground">
                    Código limpo e bem estruturado
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-border transform hover:scale-105 transition-smooth ml-8">
                  <Zap className="text-primary mb-3" size={32} />
                  <h3 className="font-bold text-foreground mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    Otimizado para velocidade
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-border transform hover:scale-105 transition-smooth">
                  <Users className="text-primary mb-3" size={32} />
                  <h3 className="font-bold text-foreground mb-2">Colaboração</h3>
                  <p className="text-sm text-muted-foreground">
                    Trabalho em equipe eficiente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white border-t border-b border-border">
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '5+', label: 'Projetos' },
              { number: '2+', label: 'Anos Exp.' },
              { number: '100%', label: 'Dedicação' },
              { number: '∞', label: 'Aprendizado' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center animate-fadeInUp" style={{ animationDelay: `${idx * 100}ms` }}>
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-12 text-center border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tenho interesse em oportunidades de desenvolvimento e colaboração. Sinta-se à vontade para entrar em contato!
          </p>
          <Button
            size="lg"
            onClick={() => onNavigate('contact')}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Iniciar Conversa
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
}
