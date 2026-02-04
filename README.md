# DoaAki Workspace

Monorepo contendo o projeto DoaAki Marketplace com versões Web e Mobile.

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

### Web
```bash
npm run web:dev      # Inicia servidor de desenvolvimento
npm run web:build    # Build de produção
```

### Mobile
```bash
npm run mobile:start     # Inicia Metro bundler
npm run mobile:android   # Executa no Android
npm run mobile:ios       # Executa no iOS
```

### Shared
```bash
npm run shared:build    # Compila o pacote shared
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
