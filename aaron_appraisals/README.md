# FJK Real Estate - Website

Site informativo estático para FJK Real Estate Ltd., construído com React + Vite + Bootstrap.

Resumo
- Projeto: site estático entregue ao cliente para apresentação de serviços e contato.
- Stack: React 19 (via Vite), CSS Modules e Bootstrap 5.

Principais features
- Página inicial com hero e contato
- Seções: Home, About, Contact, Footer
- Layout responsivo usando Bootstrap + CSS Modules

Estrutura do repositório (resumido)
- `index.html` - template principal usado pelo Vite
- `src/` - código fonte React
  - `App.jsx` - raiz do layout, monta Navbar / Home / About / Contact / Footer
  - `main.jsx` - ponto de entrada, inclui CSS global e inicializa React
  - `components/` - componentes da UI (`navbar.jsx`, `home.jsx`, `about.jsx`, `contact.jsx`, `footer.jsx`)
  - `styles/` - CSS Modules para componentes
  - `assets/` - imagens usadas no site
- `public/` - arquivos públicos

Requisitos
- Node.js (v16+ recomendado)
- npm

Scripts úteis
- `npm install` - instala dependências
- `npm run dev` - inicia servidor de desenvolvimento (Vite)
- `npm run build` - gera build estático em `dist/`
- `npm run preview` - pré-visualiza o build gerado

Como desenvolver localmente
1. Clone o repositório e abra a pasta do projeto
2. Instale dependências:
```
npm install
```
3. Rode em modo de desenvolvimento:
```
npm run dev
```
4. Edite arquivos em `src/`. O Vite fará hot reload automaticamente.

Build e deploy
- Para gerar os arquivos estáticos:
```
npm run build
```
- O conteúdo pronto para deploy ficará em `dist/`. Plataformas estáticas (Netlify, Vercel, GitHub Pages) funcionam bem.

Deploy rápido (Netlify / Vercel)
- Command (build): `npm run build`
- Publish dir: `dist`

Sobre o código
- Componentes usam CSS Modules (`src/styles/*.module.css`) para isolar estilos.
- Imagens e assets ficam em `src/assets/pictures/` e são importadas pelo bundler.
- Arquivo `src/main.jsx` registra `App` no elemento `#root` do `index.html`.

Boas práticas e próximos passos sugeridos
- Substituir links `href` por `react-router` se for necessária navegação interna sem saltos de página
- Adicionar um formulário de contato funcional (com backend ou serviço de terceiros)
- Incluir testes unitários / lint em pipeline CI

Contato e manutenção
- Mantentor: desenvolvedor que entregou o projeto (contato no cabeçalho do site)
- Para dúvidas sobre build/deploy, siga `docs/deploy.md` ou abra uma issue no repositório.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
