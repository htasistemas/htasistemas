# Deploy HTA Sistemas no Cloudflare Tunnel

Este projeto esta pronto para ser servido como site estatico por Nginx em container.

## Estado atual confirmado

- O build de producao esta valido com `npm run build`.
- O tunnel legado usa `cloudflared` em Docker com `config.yml` local.
- O tunnel correto e `HTA-SERVER-PROD`.
- UUID do tunnel: `88e84728-e5de-4407-8c3d-6c0cf8d5a722`.
- Connector Linux ativo: `cc31e7ac-e4d4-489d-b80d-77dcef589795`.
- DNS ja criado no Cloudflare para:
  - `htasistemas.com.br`
  - `www.htasistemas.com.br`
- O dominio raiz ainda responde `404` porque falta adicionar os hostnames no `config.yml` do servidor Linux para apontar ao servico `hta-site`.

## Arquivos prontos neste projeto

- `Dockerfile`
- `nginx.conf`
- `deploy/cloudflared/config.hta-server-prod.yml`
- `deploy/docker-compose.hta-site.legacy.yml`
- `deploy/docker-compose.g3-with-hta.yml`

## config.yml final do tunnel

Arquivo pronto em `deploy/cloudflared/config.hta-server-prod.yml`.

Conteudo:

```yml
ingress:
  - hostname: htasistemas.com.br
    service: http://hta-site:80
  - hostname: www.htasistemas.com.br
    service: http://hta-site:80
  - hostname: g3.htasistemas.com.br
    service: http://frontend:80
  - hostname: apig3.htasistemas.com.br
    service: http://backend:8080
  - service: http_status:404
```

## Snippet do compose legado

Arquivo pronto em `deploy/docker-compose.hta-site.legacy.yml`.

Trecho para adicionar no `docker-compose.yml` legado:

```yml
services:
  hta-site:
    image: hta-site:latest
    container_name: hta-site
    restart: always
    networks:
      - g3_net
    healthcheck:
      test: ["CMD-SHELL", "wget -qO- http://localhost/ > /dev/null || exit 1"]
      interval: 15s
      timeout: 8s
      retries: 8
      start_period: 20s
```

## docker-compose completo mesclado

Arquivo pronto em `deploy/docker-compose.g3-with-hta.yml`.

Premissa:

- o legado G3 esta em `/home/srv/g3`
- o portal HTA esta em `/home/srv/hta-site`
- por isso o servico `hta-site` usa `context: ../hta-site`

## Fluxo recomendado no servidor Linux

1. Copiar o projeto HTA para `/home/srv/hta-site`.
2. Buildar a imagem:

```bash
cd /home/srv/hta-site
docker build -t hta-site:latest .
```

3. No servidor do stack legado, atualizar o `docker/cloudflared/config.yml` com o conteudo de `deploy/cloudflared/config.hta-server-prod.yml`.
4. No `docker-compose.yml` legado, adicionar o servico `hta-site` usando o snippet de `deploy/docker-compose.hta-site.legacy.yml`, ou substituir tudo pelo arquivo completo `deploy/docker-compose.g3-with-hta.yml`.
5. Subir novamente o stack:

```bash
cd /home/srv/g3
docker compose up -d --build --remove-orphans
```

## Resultado esperado

- `https://htasistemas.com.br` -> portal institucional HTA
- `https://www.htasistemas.com.br` -> portal institucional HTA
- `https://g3.htasistemas.com.br` -> legado G3 preservado
- `https://apig3.htasistemas.com.br` -> backend legado preservado
