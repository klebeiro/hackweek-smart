# Projeto Hackweek 2023

- Detalhes do evento: https://site.crateus.ufc.br/hackweek2023/
- Problema e requisitos da solução: https://docs.google.com/document/d/1-0KFU82XFYVHJ0LFxWICpKQ4sUbFSLvZewO1Ld6lVrQ/edit

# API
## CONFIGURAÇÃO INICIAL DO AMBIENTE DE DESENVOLVIMENTO

1) copiar e colar o .env.local
2) renomear para .env
3) Adicionar no .env as suas variáveis locais necessárias.
4) Importar arquivo json das rotas no seu insomnia

## COMANDO PARA INSTALAR E RODAR O AMBIENTE DE DESENVOLVIMENTO

```npm install```
```docker run -d -p 6379:6379 -i -t redis:3.2.5-alpine```
```npm run dev:server```
```npm run dev:queue```

```npm run build & npm run typeorm migration:run -- -d ./src/infra/database/data-source.ts```

## COMANDOS UTEIS 

```Criar migration: npm run typeorm migration:create ./src/infra/database/migrations/name-migration```

```Rodar migrations: npm run build & npm run typeorm migration:run -- -d ./src/infra/database/data-source.ts```

```Reverter uma migration: npm run build & npm run typeorm migration:revert -- -d ./src/infra/database/data-source.ts```
