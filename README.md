# Conversor de Unidades de Pressão

Projeto da atividade **A3 — Desenvolvimento colaborativo com o uso de repositório** (FDV, ADS P4, Turma 3).

Conversor de pressão 100% client-side (HTML + CSS + JS puro), sem dependência de backend. Converte entre Pascal, kPa, bar, atm, PSI, Torr e mmHg, com um manômetro animado como elemento visual central.

## Integrantes do grupo

| Nome completo | Usuário GitHub |
|---|---|
| Abraão Batista da Silva | [@abraaobs](https://github.com/abraaobs) |
| Gabriel Roberto Xavier da Silva | [@xavierr-eng](https://github.com/xavierr-eng) |

## Como rodar

Basta abrir `index.html` em qualquer navegador, ou publicar via **GitHub Pages** (Settings → Pages → branch `main` → pasta `/root`).

## Estrutura

```
conversor-pressao/
└── index.html   (HTML + CSS + JS em um único arquivo)
```

## Sugestão de fluxo de trabalho no Git/GitHub

A atividade pede que sejam avaliados **commits, branches e boas práticas** — não a quantidade de código. Sugestão de organização:

### 1. Branches
- `main` → só recebe código já revisado (via Pull Request).
- `dev` → branch de integração do time.
- `feature/nome-da-parte` → uma branch por funcionalidade, ex:
  - `feature/logica-conversao`
  - `feature/gauge-svg`
  - `feature/estilizacao`
  - `feature/tabela-unidades`

Fluxo: cria a branch a partir de `dev` → commits → Pull Request para `dev` → depois `dev` → `main` quando estável.

### 2. Commits
Use mensagens claras e, se quiser, **Gitmoji** para indicar o tipo de mudança:

```
✨ feat: adiciona lógica de conversão entre unidades de pressão
🎨 style: ajusta paleta de cores do painel
🐛 fix: corrige arredondamento de valores muito pequenos
♻️ refactor: separa funções de conversão da manipulação do DOM
📝 docs: atualiza README com integrantes do grupo
🔧 chore: configura estrutura inicial do repositório
```

Referência rápida de Gitmoji: https://gitmoji.dev

### 3. Versionamento (tags)
Ao fechar uma entrega estável, marque com uma tag:
```
git tag -a v0.1.0 -m "Versão inicial funcional do conversor"
git push origin v0.1.0
```

## Comandos Git essenciais

```bash
# clonar o repositório já criado no GitHub
git clone https://github.com/<usuario>/<repo>.git
cd <repo>

# criar e trocar para uma branch de funcionalidade
git checkout -b feature/logica-conversao

# depois de editar arquivos
git add .
git commit -m "✨ feat: adiciona lógica de conversão entre unidades de pressão"
git push origin feature/logica-conversao

# abrir Pull Request no GitHub (feature -> dev)
# depois de aprovado e mergeado, atualizar local
git checkout dev
git pull origin dev
```

## Fórmulas de conversão (base: Pascal)

| Unidade | Para Pascal (multiplicar por) |
|---|---|
| kPa | 1.000 |
| bar | 100.000 |
| atm | 101.325 |
| psi | 6,894757 |
| torr / mmHg | 133,322 |
