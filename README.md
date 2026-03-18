# HTA Sistemas

Portal institucional da HTA Sistemas com landing comercial do G3N, estruturado para expansao futura com novos produtos e subdominios.

## Stack

- React
- TypeScript
- React Router
- Tailwind CSS
- shadcn/ui style components
- React Hook Form + Zod

## Rotas atuais

- `/` = portal institucional
- `/sobre` = apresentacao institucional
- `/solucoes` = solucoes e servicos
- `/sistemas` = catalogo e arquitetura de produtos
- `/contato` = contato institucional
- `/g3n` = landing comercial do produto

## Dominio e subdominio

- `htasistemas.com.br` = site institucional
- `g3n.htasistemas.com.br` = URL canonica preparada para o produto
- fallback local do produto: `/g3n`

As URLs, navegacao principal, contato e produtos ficam centralizados em `src/lib/config.ts`.

## Como rodar

```bash
npm install
npm run dev
```

## Validacao

```bash
npm run typecheck
npm run build
```

## Deploy

Arquivos de deploy para container + Cloudflare Tunnel:

- `Dockerfile`
- `nginx.conf`
- `deploy/cloudflared/config.hta-server-prod.yml`
- `deploy/docker-compose.hta-site.legacy.yml`
- `deploy/docker-compose.g3-with-hta.yml`
- `DEPLOY-CLOUDFLARE.md`

## Pontos para ajustar antes de publicar

- Atualizar WhatsApp e e-mail comerciais em `src/lib/config.ts`
- Revisar links de redes sociais em `src/data/company.ts`
- Integrar os formularios com backend, CRM ou automacao
- Configurar o servidor de producao para fallback SPA nas rotas internas
