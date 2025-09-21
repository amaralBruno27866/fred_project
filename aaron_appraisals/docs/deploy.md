# Deploy

Build localmente

1. Instale dependências: `npm install`
2. Gere o build: `npm run build`

Deploy em plataformas estáticas

- Netlify: arraste a pasta `dist/` no painel, ou conecte o repositório e defina o comando `npm run build` e pasta de publicação `dist`.
- Vercel: conecte repositório e certifique-se que o comando de build seja `npm run build` e a pasta de saída `dist`.
- GitHub Pages: gere `dist/` e publique usando `gh-pages` ou workflow que faça upload do conteúdo.

Configurações comuns
- Variáveis de ambiente não são usadas atualmente. Se adicionar chaves (ex.: endpoint de formulários), use as configurações de ambiente da sua plataforma de deploy.
