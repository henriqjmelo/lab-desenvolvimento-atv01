import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'contato@example.com',
      link: 'mailto:contato@example.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'WhatsApp',
      value: '+55 (31) 99999-9999',
      link: 'https://wa.me/5531999999999',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      value: 'Belo Horizonte, MG',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={24} />, url: 'mailto:contato@example.com', label: 'Email' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-white to-secondary/30 py-20">
      <div className="container">
        {/* Header */}
        <div className="accent-line mb-16 animate-slideInLeft">
          <h1 className="text-5xl font-bold text-foreground mb-4">Contato</h1>
          <p className="text-xl text-primary font-semibold">
            Vamos conversar! Entre em contato comigo
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, idx) => (
            <a
              key={idx}
              href={method.link}
              className="bg-white rounded-xl p-8 border border-border shadow-md hover:shadow-lg transition-smooth card-hover"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-primary mb-4">{method.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
              <p className="text-muted-foreground">{method.value}</p>
            </a>
          ))}
        </div>

        {/* Form and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 border border-border shadow-lg animate-slideInLeft">
            <h2 className="text-2xl font-bold text-foreground mb-6">Envie uma mensagem</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-semibold">
                  Mensagem enviada com sucesso! Obrigado pelo contato.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-smooth flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Social Links and Info */}
          <div className="animate-slideInRight space-y-8">
            {/* Social Links */}
            <div className="bg-white rounded-xl p-8 border border-border shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Redes Sociais</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-smooth"
                    title={social.label}
                  >
                    {social.icon}
                    <span className="font-semibold text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4">Disponibilidade</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Estou aberto a novas oportunidades, projetos freelance e colaborações. Respondo mensagens em até 24 horas.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Horário:</span> Segunda a Sexta, 9h às 18h
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Timezone:</span> UTC-3 (Brasília)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
