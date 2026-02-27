import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || 'Não foi possível enviar sua mensagem.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Erro inesperado ao enviar mensagem.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'gabrielvieira200481@gmail.com',
      link: 'mailto:gabrielvieira200481@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'WhatsApp',
      value: '+55 (31) 98858-2004',
      link: 'https://wa.me/5531988582004',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      value: 'Belo Horizonte, MG',
      link: 'https://maps.google.com/?q=Belo+Horizonte,+MG',
    },
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: 'https://github.com/Arachato', label: 'GitHub' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/kaiojorge-dev', label: 'LinkedIn' },
    { icon: <Twitter size={24} />, url: 'https://x.com/kaiojorge_dev', label: 'X / Twitter' },
    { icon: <Mail size={24} />, url: 'mailto:gabrielvieira200481@gmail.com', label: 'Email' },
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

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg">
                <p className="text-red-800 font-semibold">{errorMessage}</p>
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
                  minLength={2}
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
                  minLength={10}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                  placeholder="Sua mensagem aqui..."
                ></textarea>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition-smooth flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
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
