# Funcionalidades por Cena — Jogo Criminal

## Visão geral

Cada cena é composta por camadas independentes configuráveis no editor. Este documento descreve os elementos disponíveis e como cada um se aplica aos diferentes tipos de cena do jogo.

---

## Elementos disponíveis nas cena

### 1. Fundo 360°
Imagem equirretangular que forma o ambiente imersivo da cena.
- Selecionável a partir do banco de fundos ou por upload
- Pode ser foto real, ilustração ou composição digital

### 2. Objetos (pistas / props)
Imagens PNG posicionadas no espaço 3D.
- Posicionamento livre com arrastar
- Escala e rotação ajustáveis
- **Propriedades:**
  - `Descrição` — texto exibido ao clicar no modo de visualização
  - `Sumir após visualizar` — objeto desaparece após o jogador clicar
  - `Necessário para avançar` — contabilizado para progressão

### 3. Painéis de texto
Placas 3D com conteúdo textual longo (perfis, laudos, documentos).
- Posicionamento e escala livres
- Conteúdo editável diretamente no editor
- Visíveis durante toda a cena (não somem)

### 4. Botões de navegação
Planos 3D clicáveis que levam o jogador a outra cena.
- Label editável
- Destino configurável por cena

### 5. Música de fundo
Áudio em loop que toca durante toda a cena no modo de visualização.
- Upload de arquivo de áudio
- Única por cena

### 6. Som de clique
Efeito sonoro reproduzido ao clicar em qualquer objeto da cena.
- Upload de arquivo de áudio curto
- Único por cena

### 7. Próxima cena (progressão automática)
Define para qual cena o jogador é redirecionado ao coletar todos os objetos marcados como `Necessário para avançar`.

### 8. Legendas
Planos 3D finos com texto de linha única — ideal para títulos, rótulos e frases curtas.
- Posicionamento e escala livres
- Texto editável diretamente no editor (campo de texto simples)
- Visíveis durante toda a cena (não somem)
- Sem função de navegação (diferente dos botões de navegação)

---

## Referência rápida — propriedades dos objetos

| Propriedade | Modo de edição | Efeito no modo de visualização |
|---|---|---|
| `Descrição` | Textarea no painel | Exibe texto ao clicar |
| `Sumir após visualizar` | Checkbox | Objeto desaparece ao fechar o dialog |
| `Necessário para avançar` | Checkbox | Contabilizado para progressão automática |

## Referência rápida — tipos de texto 3D

| Tipo | Dimensão | Uso recomendado |
|---|---|---|
| Legenda | 2 × 0.35 | Frase curta, título, rótulo, placa |
| Botão de navegação | 2 × 0.5 | Link para outra cena |
| Painel de texto | 2 × 1.2 | Texto longo, documentos, laudos |

---

## Considerações de design

- **Pistas obrigatórias vs opcionais:** Nem toda pista precisa ser `Necessário para avançar`. Pistas opcionais enriquecem a narrativa sem bloquear o progresso.
- **Som de clique:** Recomendado usar sons diferentes por tipo de cena (coleta vs leitura de documento).
- **Textos longos:** Painéis de texto são mais adequados que a descrição de objeto para conteúdo com mais de 3 linhas.
- **Progressão:** A propriedade `Próxima cena` define redirecionamento automático; botões de navegação permitem transições manuais — podem coexistir na mesma cena.
