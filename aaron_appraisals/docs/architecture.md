# Arquitetura do Projeto

Visão geral
- Aplicação simples, baseada em componentes React, empacotada com Vite.
- Não há estado global ou gerenciamento complexo — componentes são funcionais e focam em apresentação.

Decisões de arquitetura
- Vite: bundler rápido para dev e build.
- React com componentes funcionais e CSS Modules para escopo de estilos.
- Bootstrap: utilitários e grid responsivo para layouts rápidos.

Fluxo de assets
- Imagens estão em `src/assets/pictures/` e importadas diretamente nos componentes.

Quando escalar
- Extrair constantes e configurações para um arquivo `config/`.
- Adicionar roteamento com `react-router` para várias páginas com navegação client-side.
- Criar serviço API para contato e armazenar credenciais via variáveis de ambiente.
