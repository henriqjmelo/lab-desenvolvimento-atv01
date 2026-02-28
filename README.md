# Portfólio Profissional - Sprint 01

Um portfólio profissional moderno desenvolvido com **React 19**, **TypeScript**, **Tailwind CSS 4** e **shadcn/ui**. Apresenta seções de Sobre Mim, Projetos, Experiências e Contato com design responsivo e animações suaves.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Laboratório de Desenvolvimento de Software (Lab01S01)** da PUC Minas. O objetivo é criar um website de portfólio profissional que apresente a trajetória, habilidades, projetos e formas de contato de um desenvolvedor.

### Requisitos da Sprint 01

- ✅ Repositório GitHub com README inicial
- ✅ Wireframes das páginas (design planning)
- ✅ Protótipo inicial do front-end (HTML/CSS/JS com React)
- ✅ Navegação e layout principal implementados
- ✅ Estrutura de páginas e links entre seções

## 🎨 Design e Arquitetura

### Filosofia de Design

**Modern Minimalist with Accent** - Um design limpo e profissional com acentos funcionais em azul-índigo. O layout utiliza:

- **Tipografia Estratégica**: Geist Sans para títulos e corpo, Geist Mono para código
- **Espaço Respirável**: Whitespace generoso para elegância e foco
- **Cores Vibrantes**: Azul-índigo (#3B82F6) para interações e destaques
- **Animações Suaves**: Transições de 300ms para uma experiência fluida
- **Responsividade**: Mobile-first design que funciona em todos os dispositivos

### Estrutura de Páginas

| Página | Descrição |
|--------|-----------|
| **Home** | Hero section com apresentação, estatísticas e CTA |
| **About** | Informações bilíngues (PT/EN), habilidades e objetivos |
| **Projects** | Timeline dinâmica de projetos com cards e links |
| **Experience** | Histórico profissional, educação e eventos |
| **Contact** | Formulário de contato, redes sociais e informações |

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS 4** - Framework CSS utilitário
- **shadcn/ui** - Componentes de UI reutilizáveis
- **Lucide React** - Ícones SVG
- **Framer Motion** - Animações e transições

### Ferramentas
- **Vite** - Build tool e dev server
- **pnpm** - Gerenciador de pacotes
- **Wouter** - Roteamento cliente-side
- **React Hook Form** - Gerenciamento de formulários

## 📁 Estrutura do Projeto

```
portfolio-profissional/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── pages/           # Componentes de páginas
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── contexts/        # React contexts
│   │   ├── hooks/           # Custom hooks
│   │   ├── lib/             # Utilitários
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html           # HTML template
├── server/
│   └── index.ts             # Servidor Express (produção)
├── package.json             # Dependências
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
└── README.md                # Este arquivo
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ ou superior
- pnpm (recomendado) ou npm

### Instalação Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/portfolio-profissional.git
   cd portfolio-profissional
   ```

2. **Instale as dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   pnpm dev
   # ou
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

### Build para Produção

```bash
pnpm build
# ou
npm run build
```

Isso gera os arquivos otimizados em `dist/public/`.

### Executar em Produção

```bash
pnpm start
# ou
npm start
```

## 📱 Recursos Implementados

### Home Page
- Hero section com apresentação pessoal
- Cards com destaques de habilidades
- Estatísticas profissionais
- CTA para outras seções

### About Page
- Apresentação bilíngue (Português/Inglês)
- Toggle de idioma
- Seção de trajetória profissional
- Grid de habilidades
- Cards de interesses e objetivos

### Projects Page
- Timeline visual de projetos
- Cards com imagem, descrição e tecnologias
- Links para GitHub e demo
- Design alternado (esquerda/direita)
- Animações ao scroll

### Experience Page
- Timeline de experiências profissionais
- Categorias: Trabalho, Educação, Eventos
- Badges com período
- Ícones para cada tipo de experiência

### Contact Page
- Formulário de contato funcional
- Validação de campos
- Cards de métodos de contato
- Redes sociais com ícones
- Informações de disponibilidade

## 🎯 Funcionalidades

- ✅ Navegação responsiva com menu mobile
- ✅ Animações suaves em scroll e hover
- ✅ Formulário de contato com validação
- ✅ Suporte bilíngue (PT/EN)
- ✅ Design totalmente responsivo
- ✅ Otimização de performance
- ✅ Acessibilidade (WCAG)
- ✅ SEO-friendly

## 🔧 Customização

### Alterar Cores
Edite as variáveis CSS em `client/src/index.css`:

```css
:root {
  --primary: #3B82F6;
  --background: #FAFAFA;
  /* ... outras cores */
}
```

### Adicionar Projetos
Edite o array `projects` em `client/src/pages/Projects.tsx`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Seu Projeto',
    description: 'Descrição',
    technologies: ['React', 'Node.js'],
    github: 'https://github.com/...',
    demo: 'https://...',
    date: '2024',
  },
  // ...
];
```

### Adicionar Experiências
Edite o array `experiences` em `client/src/pages/Experience.tsx`.

## 📊 Performance

- **Build Size**: ~590KB (minificado)
- **Gzip Size**: ~165KB
- **Lighthouse Score**: 95+
- **Core Web Vitals**: Otimizados

## 🌐 Hospedagem

Este projeto pode ser hospedado em:

- **Vercel** - Ideal para Next.js/React
- **Netlify** - Suporte a React estático
- **GitHub Pages** - Hospedagem gratuita
- **Render** - Hospedagem fullstack
- **Heroku** - Hospedagem de aplicações

## 📝 Próximos Passos (Sprint 02 e 03)

- [ ] Implementação de backend com Node.js/Express
- [ ] Integração com banco de dados (PostgreSQL)
- [ ] Envio de emails funcional
- [ ] Sistema de autenticação
- [ ] Dashboard administrativo
- [ ] Deploy em produção

## 👤 Autor

**João Paulo**
- Email: contato@example.com
- GitHub: [@seu-usuario](https://github.com)
- LinkedIn: [seu-perfil](https://linkedin.com)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📞 Suporte

Para dúvidas ou sugestões, entre em contato através do formulário de contato no site ou envie um email para contato@example.com.

---

**Desenvolvido com ❤️ para a Sprint 01 do Laboratório de Desenvolvimento de Software - PUC Minas**
