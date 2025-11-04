# Guia de Deploy na Vercel

## Repositório GitHub
✅ **Repositório criado:** https://github.com/msinhorini-manus/datavillage-erp-summit

## Passos para Deploy na Vercel

### 1. Importar Projeto na Vercel

1. Acesse https://vercel.com/new
2. Faça login com sua conta
3. Clique em **"Import Git Repository"**
4. Selecione o repositório: **`msinhorini-manus/datavillage-erp-summit`**
5. Clique em **"Import"**

### 2. Configurar o Projeto

Na tela de configuração do projeto:

**Framework Preset:** Vite
**Root Directory:** `./` (deixe como está)
**Build Command:** `pnpm build` (ou deixe o padrão)
**Output Directory:** `dist` (ou deixe o padrão)

### 3. Configurar Variáveis de Ambiente

Clique em **"Environment Variables"** e adicione as seguintes variáveis:

#### Variáveis Obrigatórias do Sistema Manus

Estas variáveis são fornecidas automaticamente pelo sistema Manus. Na Vercel, você precisa configurá-las manualmente:

```
DATABASE_URL=<sua_connection_string_do_banco>
JWT_SECRET=<gerar_um_secret_seguro>
OAUTH_SERVER_URL=https://api.manus.im
OWNER_NAME=Marcelo Sinhorini
OWNER_OPEN_ID=<seu_open_id>
```

#### Variáveis do Frontend

```
VITE_APP_ID=datavillage-erp-summit
VITE_APP_TITLE=Data Village ERP Summit 2026
VITE_APP_LOGO=/logo.svg
VITE_ANALYTICS_ENDPOINT=<opcional>
VITE_ANALYTICS_WEBSITE_ID=<opcional>
```

#### Variáveis da API Forge (se aplicável)

```
BUILT_IN_FORGE_API_KEY=<sua_api_key>
BUILT_IN_FORGE_API_URL=<url_da_api>
VITE_FRONTEND_FORGE_API_KEY=<sua_api_key_frontend>
VITE_FRONTEND_FORGE_API_URL=<url_da_api_frontend>
```

#### Variáveis do OAuth Portal

```
VITE_OAUTH_PORTAL_URL=<url_do_portal_oauth>
```

### 4. Configurar Banco de Dados

Você tem duas opções:

#### Opção A: Usar Vercel Postgres (Recomendado)

1. Na dashboard do projeto na Vercel, vá em **"Storage"**
2. Clique em **"Create Database"**
3. Selecione **"Postgres"**
4. Siga as instruções para criar o banco
5. A Vercel vai automaticamente adicionar a variável `DATABASE_URL`

#### Opção B: Usar banco de dados externo

Configure a variável `DATABASE_URL` com a connection string do seu banco PostgreSQL:

```
DATABASE_URL=postgresql://usuario:senha@host:5432/database
```

### 5. Fazer o Deploy

1. Após configurar todas as variáveis, clique em **"Deploy"**
2. Aguarde o build e deploy serem concluídos (aproximadamente 2-5 minutos)
3. Você receberá uma URL de produção, algo como: `https://datavillage-erp-summit.vercel.app`

### 6. Executar Migrations do Banco de Dados

Após o primeiro deploy, você precisa executar as migrations:

**Opção A: Via Vercel CLI (localmente)**

```bash
vercel env pull .env.local
pnpm db:push
```

**Opção B: Via Vercel Dashboard**

1. Vá em **"Settings"** → **"Functions"**
2. Adicione um script de migration ou use o Vercel CLI

### 7. Popular o Banco de Dados

Execute o script de seed para adicionar os dados iniciais:

```bash
pnpm tsx seed-data.mjs
pnpm tsx seed-new-sections.mjs
```

### 8. Testar o Site

Acesse as URLs:

- **Site Público:** `https://seu-projeto.vercel.app`
- **Painel Admin:** `https://seu-projeto.vercel.app/admin`
- **API:** `https://seu-projeto.vercel.app/api/trpc`

## Configurações Adicionais

### Domínio Personalizado

1. Vá em **"Settings"** → **"Domains"**
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruído

### Variáveis de Ambiente por Ambiente

Você pode configurar variáveis diferentes para:
- **Production** (produção)
- **Preview** (branches de preview)
- **Development** (desenvolvimento local)

### Logs e Monitoramento

- **Logs:** Acesse em **"Deployments"** → clique no deployment → **"Build Logs"** ou **"Runtime Logs"**
- **Analytics:** Disponível em **"Analytics"** na dashboard do projeto

## Problemas Comuns

### Build Falha

- Verifique os logs de build na Vercel
- Certifique-se de que todas as dependências estão no `package.json`
- Verifique se as variáveis de ambiente estão configuradas

### Erro de Conexão com Banco de Dados

- Verifique se a `DATABASE_URL` está correta
- Certifique-se de que as migrations foram executadas
- Verifique se o banco de dados está acessível pela Vercel

### Página 404 no Admin

- Verifique se as rotas estão configuradas corretamente
- Certifique-se de que o build incluiu todas as páginas

## Suporte

Para mais informações, consulte:
- [Documentação da Vercel](https://vercel.com/docs)
- [Guia de Deploy Next.js](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
