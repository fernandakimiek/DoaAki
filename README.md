# DoaAki Workspace

Monorepo contendo o projeto DoaAki Marketplace com versões Web e Mobile. Utiliza **npm workspaces** para gerenciamento de pacotes e **Turborepo** para orquestração de tarefas, cache e ordem de execução entre os pacotes.

## Estrutura do Projeto

```
DoaAkiWorkspace/
├── packages/
│   ├── web/          # Aplicação React Web (Vite)
│   ├── mobile/       # Aplicação React Native CLI
│   └── shared/       # Código compartilhado (tipos, dados, utils, constantes)
```

## Pré-requisitos

- Node.js >= 20
- npm
- Para mobile:
  - Android Studio (para Android)
  - Xcode (para iOS - apenas macOS)

## Instalação

```bash
# Instalar dependências de todos os workspaces
npm install
```

## Scripts Disponíveis

Os comandos são executados via Turborepo. O build do pacote `@doaaki/shared` é disparado automaticamente quando necessário (por exemplo, antes de `web:build` ou ao rodar `web:dev` / `mobile:start`).

### Geral
```bash
npm run build    # Build de todos os pacotes (shared primeiro, depois web)
npm run dev      # Inicia dev em todos os pacotes que têm script dev
npm run lint     # Roda lint nos pacotes que possuem o script
npm run test     # Roda testes nos pacotes que possuem o script
```

### Web
```bash
npm run web:dev      # Inicia servidor de desenvolvimento (shared é buildado antes se necessário)
npm run web:build   # Build de produção
```

### Mobile
```bash
npm run mobile:start     # Inicia Metro bundler
npm run mobile:android   # Executa no Android
npm run mobile:ios       # Executa no iOS
```

### Shared
```bash
npm run shared:build    # Compila apenas o pacote shared
```

## Desenvolvimento

### Web
O projeto web está em `packages/web/` e usa Vite como bundler. O código compartilhado é importado de `@doaaki/shared`.

### Mobile
O projeto mobile está em `packages/mobile/` e usa React Native CLI. O código compartilhado é importado de `@doaaki/shared`.

### Shared
O pacote `@doaaki/shared` contém:
- **types/**: Interfaces e tipos TypeScript
- **data/**: Dados mockados
- **utils/**: Funções utilitárias
- **constants/**: Constantes (cores, categorias, etc)

## Estrutura de Navegação Mobile

- **MainTabs**: Navegação inferior com 3 tabs (Home, Mensagens, Perfil)
- **Stack Navigator**: Navegação para telas de detalhes, criação e mensagens

## Funcionalidades

### Web
- Listagem de itens para doação
- Filtros por categoria e distância
- Detalhes do item
- Criação de doação
- Sistema de mensagens
- Perfil do usuário

### Mobile
- Todas as funcionalidades do web
- Integração com câmera para fotos
- Geolocalização nativa
- Mapas nativos (react-native-maps)
- Notificações push (preparado para implementação)

## Turborepo

O cache do Turborepo (pasta `.turbo`) armazena resultados de tarefas como `build` e `lint`. Em execuções seguintes, tarefas cujos arquivos não mudaram são restauradas do cache, acelerando o fluxo. Tarefas longas como `dev` e `start` não usam cache (`cache: false`, `persistent: true`).

## Tecnologias

### Web
- React 18
- TypeScript
- Vite
- React Router
- Tailwind CSS
- Radix UI

### Mobile
- React Native 0.83
- TypeScript
- React Navigation
- React Native Maps
- React Native Image Picker
- React Native Geolocation

## Licença

Private
